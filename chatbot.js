// Chatbot functionality

// Knowledge Base - Personal Information
// TODO: Update this information to match your own profile
const knowledgeBase = {
    name: "Raluca Badea",
    location: "Sydney, NSW",
    email: "raluca540@gmail.com",
    phone: "0405 695 626",
    linkedin: "https://www.linkedin.com/in/raluca-badea-pmp-mcom-10856838/",

    summary: "Technology Delivery Leader with 15+ years of experience and proven ability to rapidly master emerging technologies. Currently completing Graduate Certificate in AI Management with hands-on experience in Python and Microsoft Power Platform.",

    skills: {
        automation: ["Generative AI", "Machine Learning", "Ethical AI", "Power Automate"],
        governance: ["Responsible AI", "Cybersecurity Alignment", "Regulatory Compliance"],
        leadership: ["Agile/Waterfall Methodologies", "Stakeholder Management", "Program Delivery", "Cross-functional Leadership"],
        technical: ["Python", "TensorFlow", "Keras", "Jupyter", "Tableau", "SQL", "RedHat OpenShift", "Microservices", "AWS", "Power Automate", "MLOps", "REST APIs", "Computer Vision"]
    },

    experience: [
        {
            title: "Project/Program Manager - Business & Wealth Technology",
            company: "Westpac",
            period: "November 2017 - Present",
            highlights: [
                "Leading Generative AI and automation initiatives",
                "Managing cross-functional governance reviews with Cybersecurity, Risk, Privacy, Legal, and Compliance teams",
                "Delivered automation-enabled migrations reducing manual effort and improving compliance oversight"
            ]
        },
        {
            title: "Project Manager",
            company: "MetLife Insurance",
            period: "January 2013 - October 2017",
            highlights: [
                "Led implementation of new retail life insurance product",
                "Delivered PCI Compliance projects",
                "Improved marketing campaigns ROI through Salesforce implementation"
            ]
        },
        {
            title: "IT Project Manager",
            company: "Suncorp Group",
            period: "November 2005 - December 2012",
            highlights: [
                "Delivered Superannuation and Wealth technology projects",
                "Achieved SuperStream legislation compliance"
            ]
        }
    ],

    education: [
        "Graduate Certificate in AI Management (In Progress) - University of Technology, Sydney",
        "Master of Commerce (Major: IT) - Macquarie University",
        "Bachelor of Commerce - Academy of Economic Studies, Bucharest"
    ],

    certifications: [
        "AI Product Manager Certification",
        "PMI Project Management Certification (PMP®)",
        "PRINCE2® Practitioner",
        "AGILEM® Practitioner"
    ],

    keyProjects: [
        "Churn Prediction & AI Strategy Development using Machine Learning models",
        "Employee Performance Clustering for Strategic Bonus Allocation",
        "Real Estate Agency MLOps Pipeline Design & Business Impact Analysis"
    ]
};

// Get DOM elements
const chatButton = document.getElementById('chat-button');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Toggle chat window
chatButton.addEventListener('click', () => {
    chatWindow.classList.add('active');
    chatInput.focus();
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.remove('active');
});

// Send message function
function sendMessage() {
    const message = chatInput.value.trim();

    if (message === '') return;

    // Add user message to chat
    addMessage(message, 'user');

    // Clear input
    chatInput.value = '';

    // Get bot response after a short delay
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse, 'bot');
    }, 500);
}

// Add message to chat window
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = message;

    messageDiv.appendChild(messageParagraph);
    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Get bot response based on user message
function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();

    // TODO: Add more responses and make the chatbot smarter

    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return `Hello! I'm here to tell you about ${knowledgeBase.name}. Feel free to ask me about her background, skills, experience, education, or how to contact her!`;
    }

    if (lowerMessage.includes('how are you')) {
        return "I'm doing great, thank you for asking! How can I assist you today?";
    }

    // About / Background / Who
    if (lowerMessage.includes('who are you') || lowerMessage.includes('about you') || lowerMessage.includes('about her') ||
        lowerMessage.includes('background') || lowerMessage.includes('tell me about') || lowerMessage.includes('who is')) {
        return `${knowledgeBase.name} is a ${knowledgeBase.summary} She's based in ${knowledgeBase.location} and has worked with major companies like Westpac, MetLife Insurance, and Suncorp Group.`;
    }

    // Name
    if (lowerMessage.includes('name')) {
        return `I'm a chatbot assistant for ${knowledgeBase.name}, a Technology Delivery Leader based in ${knowledgeBase.location}.`;
    }

    // Skills
    if (lowerMessage.includes('skill') || lowerMessage.includes('technical') || lowerMessage.includes('what can she do')) {
        return `${knowledgeBase.name} has extensive skills including:\n\nAutomation & AI: ${knowledgeBase.skills.automation.join(', ')}\n\nTechnical: ${knowledgeBase.skills.technical.slice(0, 8).join(', ')}, and more!\n\nLeadership: ${knowledgeBase.skills.leadership.join(', ')}`;
    }

    // Experience / Work History / Current Job
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job') ||
        lowerMessage.includes('current role') || lowerMessage.includes('where does she work')) {
        const currentJob = knowledgeBase.experience[0];
        return `${knowledgeBase.name} currently works as ${currentJob.title} at ${currentJob.company} since ${currentJob.period.split(' - ')[0]}. She has 15+ years of experience across major financial institutions including Westpac, MetLife Insurance, and Suncorp Group. Her expertise spans project management, AI implementation, and technology delivery.`;
    }

    // Education / Study / Degree
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('degree') ||
        lowerMessage.includes('university') || lowerMessage.includes('qualification')) {
        return `${knowledgeBase.name}'s education includes:\n\n${knowledgeBase.education.join('\n')}`;
    }

    // Certifications
    if (lowerMessage.includes('certification') || lowerMessage.includes('certified') || lowerMessage.includes('credentials')) {
        return `${knowledgeBase.name} holds several professional certifications:\n\n${knowledgeBase.certifications.join('\n')}`;
    }

    // Projects
    if (lowerMessage.includes('project')) {
        return `${knowledgeBase.name} has worked on numerous exciting projects, including:\n\n${knowledgeBase.keyProjects.join('\n\n')}`;
    }

    // Contact Information
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') ||
        lowerMessage.includes('reach') || lowerMessage.includes('get in touch')) {
        return `You can contact ${knowledgeBase.name} at:\n\nEmail: ${knowledgeBase.email}\nPhone: ${knowledgeBase.phone}\nLinkedIn: ${knowledgeBase.linkedin}`;
    }

    // Location
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('based')) {
        return `${knowledgeBase.name} is based in ${knowledgeBase.location}, Australia.`;
    }

    // AI / Machine Learning specific
    if (lowerMessage.includes('ai ') || lowerMessage.includes('artificial intelligence') ||
        lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
        return `${knowledgeBase.name} specializes in AI and Machine Learning! She's currently completing a Graduate Certificate in AI Management and has hands-on experience with Generative AI, Machine Learning, Python, TensorFlow, Keras, and MLOps. She leads AI initiatives at Westpac.`;
    }

    // Python
    if (lowerMessage.includes('python')) {
        return `Yes! ${knowledgeBase.name} has hands-on experience with Python and has worked with libraries like TensorFlow, Keras, and Jupyter for machine learning and data analysis projects.`;
    }

    // Help
    if (lowerMessage.includes('help')) {
        return `I can help you learn about ${knowledgeBase.name}! Try asking me about:\n\n- Her background and experience\n- Skills and technical expertise\n- Education and certifications\n- Projects she's worked on\n- How to contact her`;
    }

    // Website
    if (lowerMessage.includes('website') || lowerMessage.includes('site')) {
        return 'This website was built using HTML, CSS, and JavaScript. It showcases the use of an interactive chatbot to share professional information!';
    }

    // Goodbye
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('thanks')) {
        return 'Goodbye! Feel free to chat with me anytime if you want to learn more!';
    }

    // Default response
    return `I'm here to tell you about ${knowledgeBase.name}. Try asking me about her background, skills, experience, education, projects, or how to contact her!`;
    // TODO: Add more conversation topics and responses
}

// Event listeners for sending messages
sendButton.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// TODO: Try adding typing indicators when the bot is "thinking"
// TODO: Add timestamps to messages
// TODO: Save chat history in browser storage
// TODO: Add quick reply buttons for common questions
