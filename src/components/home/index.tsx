"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { MapPin, Truck, Package, Syringe, CheckCircle, Users, Clock, ThumbsUp, Shield, Award, Briefcase, GraduationCap, Plane, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    pickupAddress: '',
    pickupDate: '',
    pickupTime: '',
    deliveryAddress: '',
    packageType: '',
    packageWeight: '',
    specialInstructions: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleNextStep = () => {
    setFormStep(prevStep => prevStep + 1)
  }

  const handlePrevStep = () => {
    setFormStep(prevStep => prevStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormStep(5)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Reliable Delivery Solutions1</h1>
            <p className="text-xl mb-8">Professional. Friendly. Reliable.</p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg">
              <Link href="#quote">Get Started</Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Reliable Delivery Solutions1</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/aboutus.jpeg"
                  alt="Delivery in action"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-[450px]"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg text-gray-700 mb-6">
                  At Reliable Delivery Solutions1, we understand the critical nature of all deliveries. Founded in 2020, we've built our reputation on providing fast, secure, and dependable courier services for various industries.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our team of experienced professionals is dedicated to ensuring that your packages, equipment, and goods reach their destination on time and in perfect condition. We leverage cutting-edge technology and rigorous training to maintain the highest standards of service.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-gray-800">Secure Deliveries</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-gray-800">24/7 Availability</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-gray-800">GPS Tracking</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-gray-800">Certified Couriers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="founder" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Founder</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <Image
                  src="/founder.jpg"
                  alt="Eli Rozen, Founder of Reliable Delivery Solutions1"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md mx-auto w-auto h-[400px] object-contain"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-semibold mb-4">Eli Rozen</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Eli Rozen is the founder and principal driver of Reliable Delivery Solutions1. With a passion for excellence and a commitment to safety, Mr. Rozen has built a reputation for reliability and professionalism in the delivery industry.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Mr. Rozen's dedication to his craft is evident in his extensive certifications and specialized training:
                </p>
                <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    <span>HIPAA Certified</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Bloodborne Pathogens Certified</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Cancer Medication Delivery Certified</span>
                  </li>
                  <li className="flex items-center">
                    <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
                    <span>DOT Hazmat Training on 49 CFR Part 177 Carriage by Public Highway</span>
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                    <span>DOT Hazmat Security Awareness Training</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700">
                  With this comprehensive skill set, Mr. Rozen ensures that Reliable Delivery Solutions1 can handle even the most sensitive and specialized deliveries with the utmost care and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <span className="text-3xl font-bold text-gray-900 mb-2">10,000+</span>
                <p className="text-lg text-gray-600">Satisfied Clients</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <span className="text-3xl font-bold text-gray-900 mb-2">99.9%</span>
                <p className="text-lg text-gray-600">On-Time Deliveries</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <ThumbsUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <span className="text-3xl font-bold text-gray-900 mb-2">4.9/5</span>
                <p className="text-lg text-gray-600">Customer Rating</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Express Deliveries</h3>
                <p className="text-gray-600">Fast and secure delivery for time-sensitive packages</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Large Item Transport</h3>
                <p className="text-gray-600">Careful handling and transport of bulky items</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Syringe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Specialized Deliveries</h3>
                <p className="text-gray-600">Custom solutions for unique delivery needs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Delivery Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Mail className="h-8 w-8 text-blue-600 mr-2" />
                  Courier Services
                </h3>
                <p className="text-gray-700 mb-4">
                  We offer pickup and delivery services for major courier companies, ensuring your packages reach their destination efficiently:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>DHL</li>
                  <li>UPS</li>
                  <li>FedEx</li>
                  <li>USPS mail and parcels</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Plane className="h-8 w-8 text-blue-600 mr-2" />
                  Airline Cargo Services
                </h3>
                <p className="text-gray-700 mb-4">
                  We collaborate with various airline cargo services to provide seamless pickup and delivery:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>American Airlines PPS</li>
                  <li>Air Canada</li>
                  <li>Delta</li>
                  <li>Southwest</li>
                  <li>And many other major airlines</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700">
                Our extensive network allows us to offer comprehensive delivery solutions, connecting you to a world of efficient shipping options.
              </p>
            </div>
          </div>
        </section>

        <section id="quote" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get Your Free Quote</h2>
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className={`w-1/4 text-center ${formStep >= step ? 'text-blue-600' : 'text-gray-400'}`}>
                      <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${formStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                        {step}
                      </div>
                      <div className="mt-2 text-sm">Step {step}</div>
                    </div>
                  ))}
                </div>
                <div className="h-2 flex mt-4">
                  <div className={`flex-1 ${formStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                  <div className={`flex-1 ${formStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                  <div className={`flex-1 ${formStep >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded-lg p-8">
                {formStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <Button onClick={handleNextStep} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Next
                    </Button>
                  </div>
                )}
                {formStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Pickup Details</h3>
                    <Input
                      type="text"
                      name="pickupAddress"
                      placeholder="Pickup Address"
                      value={formData.pickupAddress}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        type="time"
                        name="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="flex justify-between">
                      <Button onClick={handlePrevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800">
                        Previous
                      </Button>
                      <Button onClick={handleNextStep} className="bg-blue-600 hover:bg-blue-700 text-white">
                        Next
                      </Button>
                    </div>
                  </div>
                )}
                {formStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Delivery Details</h3>
                    <Input
                      type="text"
                      name="deliveryAddress"
                      placeholder="Delivery Address"
                      value={formData.deliveryAddress}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="space-y-2">
                      <Label>Service Type</Label>
                      <RadioGroup
                        value={formData.serviceType}
                        onValueChange={(value) => handleRadioChange('serviceType', value)}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express">Express Delivery</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="large" id="large" />
                          <Label htmlFor="large">Large Item Transport</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="specialized" id="specialized" />
                          <Label htmlFor="specialized">Specialized Delivery</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex justify-between">
                      <Button onClick={handlePrevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800">
                        Previous
                      </Button>
                      <Button onClick={handleNextStep} className="bg-blue-600 hover:bg-blue-700 text-white">
                        Next
                      </Button>
                    </div>
                  </div>
                )}
                {formStep === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Package Information</h3>
                    <div className="space-y-2">
                      <Label>Package Type</Label>
                      <RadioGroup
                        value={formData.packageType}
                        onValueChange={(value) => handleRadioChange('packageType', value)}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="small" id="small" />
                          <Label htmlFor="small">Small (up to 5 lbs)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium">Medium (5-20 lbs)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="large" id="large" />
                          <Label htmlFor="large">Large (20-50 lbs)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="extra" id="extra" />
                          <Label htmlFor="extra">Extra Large (50+ lbs)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <Input
                      type="number"
                      name="packageWeight"
                      placeholder="Approximate Weight (lbs)"
                      value={formData.packageWeight}
                      onChange={handleInputChange}
                      required
                    />
                    <Textarea
                      name="specialInstructions"
                      placeholder="Special Instructions or Requirements"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                    />
                    <div className="flex justify-between">
                      <Button onClick={handlePrevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800">
                        Previous
                      </Button>
                      <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                        Submit Quote Request
                      </Button>
                    </div>
                  </div>
                )}
                {formStep === 5 && (
                  <div className="text-center space-y-4">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                    <h3 className="text-2xl font-bold">Thank You!</h3>
                    <p>Your quote request has been submitted successfully. We'll get back to you shortly with a detailed quote for our services.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"Reliable Delivery Solutions1 has been a game-changer for our business. Their prompt and secure deliveries have significantly improved our operational efficiency."</p>
                <p className="font-semibold">John Smith</p>
                <p className="text-sm text-gray-500">CEO, Tech Innovations Inc.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"We've been using their services for our large item transport, and the level of care and punctuality is unmatched. Highly recommended!"</p>
                <p className="font-semibold">Emily Johnson</p>
                <p className="text-sm text-gray-500">Operations Manager, Furniture Plus</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Reliable Delivery Solutions1. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-white hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}