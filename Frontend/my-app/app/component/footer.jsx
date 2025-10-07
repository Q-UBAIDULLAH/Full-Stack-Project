import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const Footer=()=>{
    return(<>
    <footer className="bg-gray-900 text-white py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1  md:grid-cols-4 gap-8">
      
      {/* Brand */}
      <div>
        <h2 className="text-xl font-bold">Fragrance Co.</h2>
        <p className="mt-2 text-sm text-gray-400">
          Captivating scents crafted for elegance.
        </p>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="text-sm font-semibold mb-2 text-center md:text-start">Quick Links</h3>
        <ul className="space-y-1 text-sm text-gray-400 text-center md:text-start">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">Shop</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-sm font-semibold mb-2 text-center md:text-start">Support</h3>
        <ul className="space-y-1 text-sm text-gray-400 text-center md:text-start">

          <li><Dialog>
        <DialogTrigger className="hover:text-white cursor-pointer">FAQs</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>FAQs</DialogTitle>
            <DialogDescription>
              <ul className="mt-2 space-y-2 text-sm">
                <li><strong>Q:</strong> Do you ship internationally?</li>
                <li><strong>A:</strong> Yes, we ship worldwide.</li>
                <li><strong>Q:</strong> What is your return policy?</li>
                <li><strong>A:</strong> Returns accepted within 30 days.</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </li>
          <li>
            <Dialog>
        <DialogTrigger className="hover:text-white cursor-pointer">Shipping</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Shipping Information</DialogTitle>
            <DialogDescription className="text-sm">
              We offer free shipping on orders over $50. Delivery times range from 3–10 business days depending on location.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </li>
          <li>
            
            <Dialog>
        <DialogTrigger className="hover:text-white cursor-pointer">Returns</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Returns & Refunds</DialogTitle>
            <DialogDescription className="text-sm">
              You can return items within 30 days of delivery. Products must be unused and in original packaging.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      </li>
          <li>
            <Dialog>
        <DialogTrigger className="hover:text-white cursor-pointer">Privacy Policy</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription className="text-sm">
              We respect your privacy. Your data will never be shared without consent. Read the full policy on our website.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-sm font-semibold mb-2 text-center md:text-start">Subscribe</h3>
        <p className="text-sm text-gray-400 mb-4 text-center md:text-start">Get the latest updates & offers.</p>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="px-3 py-2 w-full rounded-l-md text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-300 transition"
          >
            Join
          </button>
        </form>
      </div>

    </div>

    <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
      © {new Date().getFullYear()} Fragrance Co. All rights reserved.
    </div>
  </div>
</footer>




    </>)
}

export default Footer