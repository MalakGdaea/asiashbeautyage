export const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#services", label: "الخدمات" },
    { href: "#about", label: "من نحن" },
    { href: "#contact", label: "تواصلي معنا" },
];

export interface Service {
    id: number;
    title: string;
    description: string;
    price: number;
    oldPrice: number;
    category: string;
}

export const services: Service[] = [
    {
        id: 1,
        title: "علاج آثار حب الشباب",
        description: "للتخلص من الندبات والشوائب وإعادة النضارة للبشرة.",
        price: 300,
        oldPrice: 420,
        category: "Skin Care",
    },
    {
        id: 2,
        title: "تنظيف عميق",
        description: "تنظيف احترافي لإزالة الرواسب والدهون العميقة.",
        price: 250,
        oldPrice: 350,
        category: "Skin Care",
    },
    {
        id: 3,
        title: "التقشيرات الروسية",
        description: "تجديد كامل لسطح البشرة باستخدام أحدث التقنيات الروسية.",
        price: 300,
        oldPrice: 450,
        category: "Peeling",
    },
    {
        id: 4,
        title: "علاج الإكسوزوم (Exosome)",
        description: "أحدث تقنيات التجديد الخلوي لشباب بشرة دائم.",
        price: 500,
        oldPrice: 750,
        category: "Advanced",
    },
    {
        id: 5,
        title: "علاج الكلف والتصبغات",
        description: "توحيد لون البشرة وإزالة البقع الناتجة عن الشمس أو العوامل الجوية.",
        price: 300,
        oldPrice: 480,
        category: "Skin Care",
    },
    {
        id: 6,
        title: "علاج الترطيب وتقليص مسام الوجه",
        description: "للحصول على بشرة ناعمة، مرنة وبمسام ضيقة ومظهر صحي.",
        price: 320,
        oldPrice: 500,
        category: "Moisturizing",
    },
    {
        id: 7,
        title: "علاج النضارة الروسية",
        description: "لإشراقة فورية ومظهر صحي مفعم بالحيوية.",
        price: 350,
        oldPrice: 550,
        category: "Glow",
    },
    {
        id: 8,
        title: "علاج ميزوثيرابي للشعر",
        description: "تغذية عميقة لفروة الرأس لمنع التساقط وتحفيز النمو.",
        price: 320,
        oldPrice: 450,
        category: "Hair Care",
    },
    {
        id: 9,
        title: "علاج إدخال الفيتامينات والكولاجين",
        description: "تغذية مكثفة لتعزيز مرونة البشرة ومحاربة علامات التقدم في السن.",
        price: 280,
        oldPrice: 380,
        category: "Advanced",
    },
    {
        id: 10,
        title: "علاج السلمون للتفتيح",
        description: "تقنية متطورة لتفتيح وتجديد الخلايا باستخدام مستخلصات السلمون.",
        price: 420,
        oldPrice: 650,
        category: "Whitening",
    },
    {
        id: 11,
        title: "الحجامة (دموية / متزحلقة / جافة)",
        description: "عناية تقليدية بلمسة حديثة لتحفيز الدورة الدموية والتخلص من السموم.",
        price: 160,
        oldPrice: 200,
        category: "Traditional",
    },
];

export interface Testimonial {
    id: number;
    content: string;
    author: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        content: "أتقدم بجزيل الشكر على منتجات العناية بالوجه الرائعة التي تتميز بجودتها العالية وفعاليتها الواضحة. لقد منحت بشرتي نعومة ونضارة ملحوظة، وأقدر لكِ جداً تواصلكِ المستمر معي ومتابعة حالة وجهي خطوة بخطوة. بارك الله فيكِ.",
        author: "عميلة متميزة",
        rating: 5
    },
    {
        id: 2,
        content: "والله الحمد لله، كل من يراني يقول إن وجهي أصبح أكثر تفتيحاً، وبدأت التصبغات تخف بشكل ملحوظ.",
        author: "عميلة متميزة",
        rating: 5
    },
    {
        id: 3,
        content: "السلام عليكم، أولاً حابة أشكركم على حسن الضيافة والاستقبال. ثانياً، كنت بحاجة ماسة لهذا العلاج لأنني كنت أعاني من حبوب أثرت على مظهر وجهي، والحمد لله خفت الحبوب والآثار كثيراً. العلاج كان خفيفاً ولطيفاً جداً على البشرة.",
        author: "عميلة متميزة",
        rating: 5
    },
    {
        id: 4,
        content: "أود أن أشكركِ من القلب على الكريمات الرائعة. هذه هي المرة الأولى التي أجرب فيها منتجاتكِ، وبصراحة هي تستحق كل شيكل، وليست خسارة أبداً. أشعر بنضارة فورية في وجهي حتى قبل البدء بالجلسات. شكراً جزيلاً لكِ على تعاملكِ الراقي",
        author: "عميلة متميزة",
        rating: 5
    }
];

export const CONTACT_DETAILS = {
    phone: "052-954-7586",
    whatsapp: "https://wa.me/972529547586",
    instagram:"https://www.instagram.com/asiashbeautyage/",
    address: "ضاحية ٢ – رهط",
};

