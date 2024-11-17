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
              <li><a href="#" className="text-orange-600 hover:text-gray-600">Privacy Policy</a></li>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Privacy Policy</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
              <div className="space-y-6 text-gray-800">
                <h3 className="text-2xl font-semibold">1. Information We Collect</h3>
                <p>
                  We collect various types of information to provide and improve our services:
                </p>
                <ul className="list-disc pl-5">
                  <li><strong>Personal Information:</strong> When you create an account, make a donation, or purchase food, we may collect personal details such as your name, email address, phone number, and payment information.</li>
                  <li><strong>Camera Access:</strong> The App may request access to your device’s camera to capture images of surplus food items for display.</li>
                  <li><strong>Location Data:</strong> We collect location data to show nearby surplus food items and donations. This data is collected when you enable location services on your device.</li>
                  <li><strong>Usage Data:</strong> We collect usage data to improve the App’s performance and user experience.</li>
                </ul>

                <h3 className="text-2xl font-semibold">2. How We Use Your Information</h3>
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-5">
                  <li>Enable food donation and purchase processes.</li>
                  <li>Provide location-based services for nearby surplus food items.</li>
                  <li>Improve the functionality and usability of the App.</li>
                  <li>Send notifications or promotional updates related to food availability.</li>
                  <li>Ensure security and prevent fraud on the platform.</li>
                </ul>

                <h3 className="text-2xl font-semibold">3. How We Protect Your Information</h3>
                <p>We take reasonable security measures to protect your personal information from unauthorized access or disclosure, including using encryption and secure servers. However, no method of data transmission is 100% secure, and we cannot guarantee its absolute safety.</p>

                <h3 className="text-2xl font-semibold">4. Sharing Your Information</h3>
                <p>We do not share your personal information except in the following situations:</p>
                <ul className="list-disc pl-5">
                  <li><strong>Service Providers:</strong> We may share your data with trusted third-party vendors who help us process payments, provide location services, and analyze usage data. These providers are required to protect your data.</li>
                  <li><strong>Legal Compliance:</strong> We may disclose your data if required by law or in response to a legal request.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred to the new entity. You will be notified before any such transfer occurs.</li>
                </ul>

                <h3 className="text-2xl font-semibold">5. Your Rights and Choices</h3>
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-5">
                  <li><strong>Access and Update:</strong> You can access, update, or delete your personal information by logging into your account.</li>
                  <li><strong>Location Tracking:</strong> You can disable location tracking in your device’s settings. Some features may be limited if disabled.</li>
                  <li><strong>Camera Access:</strong> You can choose whether or not to allow the App to access your camera.</li>
                  <li><strong>Push Notifications:</strong> You can opt-out of receiving push notifications by adjusting your device settings.</li>
                </ul>

                <h3 className="text-2xl font-semibold">6. Data Retention</h3>
                <p>We retain your personal information as long as necessary to provide our services and comply with legal obligations. You may request to delete your account at any time, and we will remove your personal data accordingly.</p>

                <h3 className="text-2xl font-semibold">7. Children's Privacy</h3>
                <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a child under 13, we will take steps to delete it.</p>

                <h3 className="text-2xl font-semibold">8. Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated "Effective Date." Your continued use of the App after changes have been made indicates your acceptance of the new policy.</p>

                <h3 className="text-2xl font-semibold">9. Contact Us</h3>
                <p>If you have any questions or concerns about this Privacy Policy or the way we handle your data, please contact us via email  <strong>alphachongs@gmail.com</strong>
                </p>
                <p>By using the Savor & Share app, you consent to the collection and use of your personal data as outlined in this Privacy Policy.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray text-black py-8">
        <div className="container mx-auto px-4">
            <div className="text-center">
              {/* <MessageSquare className="h-6 w-6" /> */}
              <span className="text-xl font-bold">CodeTriad - Savor & Share</span>
            </div>
          <div className="mt-1 text-center text-sm text-black">
            © {new Date().getFullYear()} CodeTriad team propose solution Savor & Share for Mobile App Competition UMPSA &apos;MAC 2024&apos;
          </div>
        </div>
      </footer>
    </div>
  )
}