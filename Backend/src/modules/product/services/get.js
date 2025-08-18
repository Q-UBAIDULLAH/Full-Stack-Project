// import { getAll } from "../db/index.js"

import { getAggregate } from "../db/index.js"

const getData=async(Query)=>{
// return getAll()
const{sort}=Query
console.log("SORT",sort)

const sortMap={
      price_asc: { price: 1 },
      price_desc: { price: -1 },
      newest: { createdAt: -1 },
      oldest: { createdAt: 1 }
}
const sortStage = sortMap[Query.sort] || sortMap.newest
//   const pageNum = parseInt(page)
//   const limitNum = parseInt(limit)
//   const skip = (pageNum - 1) * limitNum
const page = Math.max(parseInt(Query.page) || 1, 1);   // default page 1
const limit = Math.min(parseInt(Query.limit) || 10, 100); // default 10, max 100
const skip = (page - 1) * limit;
// const total = facet.totalcount.total ;
// const totalPages = Math.ceil(total / limit);
// console.log("totalPages",totalPages)
return await getAggregate([

    // {
    //     $match:{
    //     title:{$regex: title, $options: "i" }
    // }
    // },
    {
        $match:{
            price:{
                     $gte: Number(Query.minPrice), // Greater than or equal (>=)
                     $lte: Number(Query.maxPrice)  // Less than or equal (<=)
            }
        }
    },
    {
    $sort:sortStage
    },

    {
        $facet:{
            item:[
                 { $project: { __v: 0 } },// __v field hide karne ke liye
                  { $skip: skip },
                 { $limit: limit },
            ],
            "totalcount":[
                {$count:"total"}
            ]
        }
    }
])
}
export default getData