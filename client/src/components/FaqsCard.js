import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div className="w-full">
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "How does ride matching work?",
            a: "Our smart algorithm matches you with nearby travelers heading in the same direction. Simply post or find a ride, and we'll connect you with compatible ride partners."
        },
        {
            q: "Is it safe to share rides with strangers?",
            a: "We prioritize your safety. We recommend reviewing user profiles and using our secure chat feature to communicate with potential ride partners before your journey."
        },
        {
            q: "How do I find a ride-match?",
            a: "It's easy! Just log in, click on Post a Ride, fill in the details, and let our system find the perfect match for your commute."
        },
        {
            q: "What if I have an emergency during a ride?",
            a: "In case of an emergency, call local authorities or emergency services immediately. Your safety is paramount. We also encourage you to share your trip details with a trusted contact."
        },
        {
            q: "How can I contact customer support? ",
            a: "You can reach our customer support team through Contact Us section of the website. We're here to assist you with any questions or issues."
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-full pt-10 pb-20 md:pb-2 mx-auto px-4 md:px-8 bg-accent drop-shadow-xl outline outline-3 outline-gray-300">
            <div className="space-y-3 text-center">
            {/* <div className="">
            <div className="bg-gray-300 h-1 rounded-full w-0"></div>
            </div> */}
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}