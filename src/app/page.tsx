import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, BarChart, Users, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-orange-500">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <MessageSquare className="h-6 w-6 text-blue-600" /> */}
            <span className="text-l font-bold text-orange-600">CodeTriad <br/> Savor & Share</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#SDG" className="text-gray-600 hover:text-orange-600">SDG</a></li>
              <li><a href="#problem" className="text-gray-600 hover:text-orange-600">Problem</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-orange-600">Features</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-orange-600">Team</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-50 py-20 bg-gif">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">An AI-Powered Surplus Food Management App</h1>
            <br/>
            <p className="text-xl text-white mb-8">This process aims to minimize food waste while supporting the vendor financially</p>
            {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button> */}
          </div>
        </section>

        <section id="SDG" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">The SDG That We Solve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* SDG Problem */}
                  <div className="flex gap-12 justify-center">
                    <Image
                      src="/SDG2.png"
                      alt="SDG2"
                      width={150}
                      height={100}
                      className="rounded-lg shadow-lg"
                    />
                    <Image
                      src="/SDG12.png"
                      alt="SDG12"
                      width={150}
                      height={100}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
              </div>
          </div>
        </section>

        <section id="problem" className="py-20">
          <div className="container mx-auto px-4">

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">The Problem That We Solve</h2>
            <div className="grid grid-cols-1 gap-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-orange-600">Food Waste</h3>
                  <ul className="space-y-4">
                    {[
                      "Food waste is getting more serious in Malaysia",
                      "Bakery often throw away unsold bread",
                      "People often throw away food due to expired date or forgotten",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/prob1.jpg"
                    alt="Food Waste Problem"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-orange-600">Vendor loss financially</h3>
                  <ul className="space-y-4">
                    {[
                      "Surplus food make vendor loss financially",
                      "Wasted ingredients lead to increased costs",
                      "Potential fines for food waste regulations",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/prob2.png"
                    alt="Vendor Loss Financially"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Mail className="h-8 w-8 text-orange-600" />, title: "⭐AI-Powered Intelligent Quality Assessment", description: "Leverage advanced AI algorithms to ensure the highest quality standards in your processes. Our intelligent assessment tool analyzes data in real time, providing actionable insights for continuous improvement.", img: "/sol1.jpg" },
                { icon: <BarChart className="h-8 w-8 text-orange-600" />, title: "⭐AI-Powered Predictive Analytics for Demand", description: "Utilize powerful predictive analytics to forecast demand trends with accuracy. Our AI-driven solution empowers businesses to make informed decisions, optimize inventory, and enhance operational efficiency.", img: "/sol2.jpg" },
                { icon: <MessageSquare className="h-8 w-8 text-orange-600" />, title: "User Friendly UI/UX design and experience", description: "Our approach prioritizes simplicity and accessibility, ensuring that every interaction is seamless and enjoyable, ultimately enhancing user satisfaction and retention.", img: "/sol3.jpg" },
                { icon: <BarChart className="h-8 w-8 text-orange-600" />, title: "Public Engagement Options", description: "Foster community support through innovative engagement solutions. Our platform offers self-purchase and donation options, making it easy for individuals to contribute and participate in meaningful initiatives.", img: "/sol4.jpg" },
                { icon: <Users className="h-8 w-8 text-orange-600" />, title: "Surplus Food Management", description: "At the end of each day, vendors review their inventory to identify which perishable items are unsold and available for public engagement. Vendors will post them into our app.", img: "/sol5.jpg" }
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="bg-orange-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Alpha Chong Shu Siang", role:"Hackathon Winner That Hack in Web3; Software Engineer @ ALPHV Technologies SDN BHD, Penultimate Year Software Engineering Student @ University Malaysia Pahang Al-Sultan Abdullah", image: "/Alpha.png", ImageAdd: "/AlphaDetail.png" },
                { name: "Koo Ming Zhe", role: "First Runner-Up i-UM Discrupt Hackathon, Full Stack Developer @ Operion Software Sdn. Bhd. Penultimate Year Softwate Engineering Student @ University Malaysia Pahang Al-Sultan Abdullah", image: "/koo.jpg", ImageAdd: "/kooDetails.jpg" },
                { name: "Gan Jun Wei", role: "Tech Enthusiast. Jack of All Trades, Master of None. Penultimate Year Software Engineering Student @ University Malaysia Pahang Al-Sultan Abdullah", image: "/gan.jpg", ImageAdd: "/ganDetails.jpg" },
              ].map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                    {member.ImageAdd && <Image
                      src={member.ImageAdd}
                      alt={member.name}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">View Our Demo Video</h2>
            <div className="flex justify-center space-x-4">
              <a href="https://www.youtube.com/watch?v=4QLLlDD2PNk" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 py-2 px-4 rounded-lg hover:bg-gray-200">
                Watch Demo Video
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray text-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              {/* <MessageSquare className="h-6 w-6" /> */}
              <span className="text-xl font-bold">CodeTriad - Savor & Share</span>
            </div>
            {/* <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6" />
              <span>info@complaintpro.com</span>
            </div> */}
          </div>
          <div className="mt-8 text-center text-sm text-black">
            © {new Date().getFullYear()} CodeTriad team propose solution Savor & Share for Mobile App Competition UMPSA &apos;MAC 2024&apos;
          </div>
        </div>
      </footer>
    </div>
  )
}