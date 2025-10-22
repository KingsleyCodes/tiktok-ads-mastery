import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>TikTok Ads Mastery | Transform Your Business with Proven TikTok Strategies</title>
        <meta name="description" content="Stop wasting money on TikTok ads! Learn proven strategies that actually convert and generate real sales for your business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-navy-700">TikTokAdsPro</div>
          <button className="bg-navy-600 hover:bg-navy-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Enroll Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-navy-50 to-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🔥 Limited Time Offer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
              Build A Leads Generation Machine For Your Business Using Tiktok Adverts
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover the exact strategies that helped 2,347+ business owners generate over $12.8M in sales using TikTok ads.
            </p>
            <div className="space-y-2 mb-8">
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Proven ad frameworks that convert</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Avoid costly mistakes most beginners make</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Step-by-step video tutorials</span>
              </div>
            </div>
            <button className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors w-full md:w-auto">
              Get Instant Access - $97
            </button>
            <p className="text-gray-500 text-sm mt-4">30-day money-back guarantee • Lifetime access</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gradient-to-br from-navy-600 to-red-500 rounded-2xl p-8 w-full max-w-md text-white text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Free Bonus When You Enroll Today:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <span className="bg-white text-navy-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">🎁</span>
                    <span>50+ Proven TikTok Ad Templates</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-white text-navy-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">🎁</span>
                    <span>Community Access</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-white text-navy-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">🎁</span>
                    <span>Weekly Q&A Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy-800 mb-12">Are You Making These TikTok Ad Mistakes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white mb-4">
                <span>❌</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Burning Money on Poor Targeting</h3>
              <p className="text-gray-600">Throwing ads at the wrong audience and watching your budget disappear with zero results.</p>
            </div>
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white mb-4">
                <span>❌</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Creating Content That Does not Convert</h3>
              <p className="text-gray-600">Getting views but no sales because your content is not designed to drive conversions.</p>
            </div>
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white mb-4">
                <span>❌</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Not Understanding the Algorithm</h3>
              <p className="text-gray-600">The TikTok algorithm works differently than other platforms - guesswork costs you money.</p>
            </div>
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white mb-4">
                <span>❌</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">No Clear Strategy</h3>
              <p className="text-gray-600">Posting randomly without a proven system that generates consistent results.</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Fix These Mistakes Now
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy-800 mb-12">What You will Achieve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center text-white mb-4">
                <span>💰</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">3X Your ROI</h3>
              <p className="text-gray-600">Learn how to create high-converting campaigns that generate at least 3x return on your ad spend.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center text-white mb-4">
                <span>🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Master TikTok Targeting</h3>
              <p className="text-gray-600">Discover advanced targeting strategies to reach your ideal customers and stop wasting money.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center text-white mb-4">
                <span>📈</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Scale with Confidence</h3>
              <p className="text-gray-600">Once you find winning ads, learn how to scale them profitably without burning through your budget.</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Start Getting Results
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy-800 mb-4">Join 2,347+ Successful Students</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Business owners who transformed their TikTok advertising results with our proven system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-700 mb-2">$12.8M+</div>
              <div className="text-gray-600">In Sales Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-700 mb-2">94%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-700 mb-2">3.2x</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              See Student Success Stories
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-navy-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy-600 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold">SJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-navy-200 text-sm">E-commerce Store Owner</p>
                </div>
              </div>
              <p className="text-navy-100 italic">
                &quot;I was spending $1,500/month on TikTok ads with zero results. After implementing the strategies from this course, I am now generating $8,000+ in monthly sales from TikTok alone!&quot;
              </p>
            </div>
            <div className="bg-navy-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy-600 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold">MC</span>
                </div>
                <div>
                  <h4 className="font-semibold">Mike Chen</h4>
                  <p className="text-navy-200 text-sm">Fitness Coach</p>
                </div>
              </div>
              <p className="text-navy-100 italic">
                &quot;The ad templates alone are worth the investment. I went from 0 to 47 clients in 60 days using the exact frameworks taught in this course.&quot;
              </p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-white hover:bg-gray-100 text-navy-800 px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Read More Testimonials
            </button>
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy-800 mb-12">What is Inside the Course</h2>
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Module 1: TikTok Ads Foundation</h3>
              <p className="text-gray-600 mb-4">Set up your account correctly and understand the platform fundamentals.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                <span>• Account setup & structure</span>
                <span>• Understanding the algorithm</span>
                <span>• Bidding strategies that work</span>
                <span>• Budget optimization</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Module 2: High-Converting Creative Strategy</h3>
              <p className="text-gray-600 mb-4">Learn how to create scroll-stopping content that converts viewers into customers.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                <span>• Hook formulas that work</span>
                <span>• Storytelling frameworks</span>
                <span>• Video editing techniques</span>
                <span>• Sound strategy</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Module 3: Advanced Targeting</h3>
              <p className="text-gray-600 mb-4">Stop guessing and start reaching your ideal customers with precision.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                <span>• Audience research methods</span>
                <span>• Lookalike audiences</span>
                <span>• Interest stacking</span>
                <span>• Retargeting strategies</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Module 4: Scaling & Optimization</h3>
              <p className="text-gray-600 mb-4">Take your winning ads and scale them profitably.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                <span>• When and how to scale</span>
                <span>• Budget increase strategies</span>
                <span>• A/B testing framework</span>
                <span>• Performance tracking</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              See Full Curriculum
            </button>
          </div>
        </div>
      </section>
{/* Transformation Section */}
<section className="py-16 bg-gradient-to-br from-navy-800 to-navy-900 text-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">
        Imagine This Time Next Month...
      </h2>
      
      <p className="text-xl text-navy-200 mb-12 max-w-2xl mx-auto">
        While your competitors are still guessing, you&apos;ll have a proven system generating consistent results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-6 text-red-400">❌ Without This Training</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">•</span>
              <span className="text-navy-200">Wasting $1,000+ on ads that don&apos;t convert</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">•</span>
              <span className="text-navy-200">Feeling frustrated and confused by the algorithm</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">•</span>
              <span className="text-navy-200">Missing out on potential customers every day</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">•</span>
              <span className="text-navy-200">Watching competitors succeed while you struggle</span>
            </div>
          </div>
        </div>
        
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-6 text-green-400">✅ With This Training</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">•</span>
              <span className="text-navy-200">3x ROI on your ad spend from day one</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">•</span>
              <span className="text-navy-200">Confidently scaling profitable campaigns</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">•</span>
              <span className="text-navy-200">Consistent stream of qualified leads</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">•</span>
              <span className="text-navy-200">Becoming the go-to expert in your niche</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold mb-4">The Choice is Yours</h3>
        <p className="text-navy-200 mb-6 text-lg">
          Continue wasting money on trial and error, or invest in a proven system that delivers results.
        </p>
        
        <div className="bg-yellow-500 text-navy-900 p-4 rounded-lg mb-6">
          <p className="font-bold">🎁 Special Bonus: Enroll today and get 1-on-1 strategy session ($500 value)</p>
        </div>

        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 w-full max-w-md">
          Get The Training Now - $97
        </button>
        
        <p className="text-navy-200 text-sm mt-4">
          ⚡ Instant access • 🛡️ 30-day money-back guarantee • 💼 Join 2,347+ successful students
        </p>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy-800 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <div className="bg-navy-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Is this course suitable for complete beginners?</h3>
              <p className="text-gray-600">Yes! We start from the very basics and gradually build up to advanced strategies. No prior TikTok ads experience required.</p>
            </div>
            <div className="bg-navy-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-navy-800 mb-2">What if I do not get results?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee. If you implement the strategies and do not see improvement in your TikTok ad performance, we will refund your investment.</p>
            </div>
            <div className="bg-navy-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-navy-800 mb-2">How long do I have access to the course?</h3>
              <p className="text-gray-600">You get lifetime access to all course materials, including future updates and additions.</p>
            </div>
            <div className="bg-navy-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Are the ad templates customizable?</h3>
              <p className="text-gray-600">Absolutely! All templates are provided in editable formats so you can adapt them to your specific business and branding.</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              View All FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy-600 to-navy-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master TikTok Ads?</h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            Stop wasting money on ads that do not convert. Start generating real sales with proven TikTok strategies.
          </p>
          <div className="mb-8">
            <button className="bg-white hover:bg-gray-100 text-navy-800 px-8 py-4 rounded-lg font-medium text-lg transition-colors mb-4 w-full md:w-auto">
              Enroll Now - $97 (One-time)
            </button>
            <p className="text-navy-300">30-day money-back guarantee • Join 2,347+ successful students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-navy-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <span className="mr-2">🔒</span>
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">💳</span>
              <span>All major cards accepted</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">🔄</span>
              <span>Instant access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TikTokAdsPro</h3>
              <p className="text-navy-300">Helping business owners master TikTok advertising since 2021.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Course</h4>
              <ul className="space-y-2 text-navy-300">
                <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-navy-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-navy-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-navy-700 text-center text-navy-400">
            <p>© {new Date().getFullYear()} TikTokAdsPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
     {/* Floating Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-orange-500 hover:bg-navy-700 text-white px-6 py-4 rounded-full font-medium text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Get Access - $97
        </button>
      </div>
    </div>
  )
}

