export type Emotion = 'idle' | 'happy' | 'confused' | 'excited' | 'thinking' | 'mindblown';
export type SceneType = 'tea' | 'restaurant' | 'remote' | 'comparison' | 'cheers';

export interface Message {
  id: string;
  sender: 'aisha' | 'dani';
  text: string;
  emotion: Emotion;
  scene: SceneType;
  delay?: number; // artificial delay before showing
}

export const conversationScript: Message[] = [
  {
    id: "m1",
    sender: "aisha",
    text: "Yaar Dani, sach batao... ☕️ jab bhi log office mein 'API' aur 'SDK' bolte hain, main bas sar hila deti hoon.",
    emotion: "confused",
    scene: "tea"
  },
  {
    id: "m2",
    sender: "aisha",
    text: "Yeh asal mein hain kya cheez? Aise samjhao jaise main bilkul naya bacha hoon.",
    emotion: "idle",
    scene: "tea"
  },
  {
    id: "m3",
    sender: "dani",
    text: "Haha, tension na lo! Sab shuru mein bas hawa mein baat karte hain. 😅 Isay aise samjho jaise hum dinner pe gaye hain.",
    emotion: "happy",
    scene: "tea"
  },
  {
    id: "m4",
    sender: "dani",
    text: "Socho tum restaurant mein baithi ho. Menu dekha, pata chal gaya kya khana hai...",
    emotion: "thinking",
    scene: "restaurant"
  },
  {
    id: "m5",
    sender: "dani",
    text: "...lekin tum seedha kitchen mein ja kar khud pan utha kar pakana shuru nahi kar sakti, na?",
    emotion: "idle",
    scene: "restaurant"
  },
  {
    id: "m6",
    sender: "dani",
    text: "Toh tum waiter ko order bata deti ho. Waiter kitchen mein jata hai, chef ko batata hai, aur tumhara khana wapas le aata hai. 🍔",
    emotion: "excited",
    scene: "restaurant"
  },
  {
    id: "m7",
    sender: "dani",
    text: "API bas wohi waiter hai! Woh ek messenger hai jo tumhari request leta hai, system ko batata hai kya karna hai, aur result wapas tumhare paas le aata hai.",
    emotion: "happy",
    scene: "restaurant"
  },
  {
    id: "m8",
    sender: "aisha",
    text: "Bas itni si baat hai? Yeh sirf do cheezon ke beech ek messenger hai?",
    emotion: "thinking",
    scene: "restaurant"
  },
  {
    id: "m9",
    sender: "dani",
    text: "Bilkul sahi! Ab batati hoon SDK kya hota hai.",
    emotion: "happy",
    scene: "remote"
  },
  {
    id: "m10",
    sender: "dani",
    text: "Socho tumne ek naya, bohat fancy sa TV khareeda. 📺",
    emotion: "idle",
    scene: "remote"
  },
  {
    id: "m11",
    sender: "dani",
    text: "API hota jaise tumhein exact electrical signals pata hon channel change karne ke liye, aur har baar khud tar jorr ke connect karna paray.",
    emotion: "thinking",
    scene: "remote"
  },
  {
    id: "m12",
    sender: "dani",
    text: "Lekin SDK... SDK hota hai jab tumhein box ke andar hi Universal Remote mil jaye. 🎛️",
    emotion: "excited",
    scene: "remote"
  },
  {
    id: "m13",
    sender: "dani",
    text: "Uspe pehle se buttons labelled hain, batteries lagi hui hain, aur instructions bhi saath mein hain. Ek ready-made kit hai jisse tumhein kuch bhi khud se banana nahi parta.",
    emotion: "happy",
    scene: "remote"
  },
  {
    id: "m14",
    sender: "aisha",
    text: "Ohhhhh!! 🤯",
    emotion: "mindblown",
    scene: "comparison"
  },
  {
    id: "m15",
    sender: "aisha",
    text: "Toh API bas woh waiter hai jo message pohanchata hai...",
    emotion: "happy",
    scene: "comparison"
  },
  {
    id: "m16",
    sender: "aisha",
    text: "...lekin SDK toh jaise waiter, menu, tray, AUR ek VIP table sab kuch ek saath mil jana hai!",
    emotion: "excited",
    scene: "comparison"
  },
  {
    id: "m17",
    sender: "dani",
    text: "Bilkul sahi pakra! ✨",
    emotion: "happy",
    scene: "comparison"
  },
  {
    id: "m18",
    sender: "aisha",
    text: "Acha ab samajh aa gaya. Ab toh main officially tech genius ban gayi hoon. 💅",
    emotion: "excited",
    scene: "cheers"
  },
  {
    id: "m19",
    sender: "dani",
    text: "Cheers to that! Chalo ab cookies idhar do. 🍪",
    emotion: "happy",
    scene: "cheers"
  }
];
