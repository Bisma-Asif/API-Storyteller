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
    text: "Okay Dani, be honest... ☕️ I always hear people at work saying 'API' and 'SDK' and I just nod along.",
    emotion: "confused",
    scene: "tea"
  },
  {
    id: "m2",
    sender: "aisha",
    text: "What actually are they? Explain it to me like I'm 5.",
    emotion: "idle",
    scene: "tea"
  },
  {
    id: "m3",
    sender: "dani",
    text: "Haha, don't worry! Everyone fakes it at first. 😅 Think of it like going out for dinner.",
    emotion: "happy",
    scene: "tea"
  },
  {
    id: "m4",
    sender: "dani",
    text: "Imagine you're at a restaurant. You look at the menu, you know what you want to eat...",
    emotion: "thinking",
    scene: "restaurant"
  },
  {
    id: "m5",
    sender: "dani",
    text: "...but you can't just walk into the kitchen, grab a pan, and start cooking it yourself.",
    emotion: "idle",
    scene: "restaurant"
  },
  {
    id: "m6",
    sender: "dani",
    text: "So, you tell the waiter your order. The waiter goes to the kitchen, tells the chef, and brings your food back to you. 🍔",
    emotion: "excited",
    scene: "restaurant"
  },
  {
    id: "m7",
    sender: "dani",
    text: "An API is just that waiter! It's a messenger that takes your request, tells a system what to do, and brings the result back to you.",
    emotion: "happy",
    scene: "restaurant"
  },
  {
    id: "m8",
    sender: "aisha",
    text: "Wait, that's it? It's literally just a messenger between two things?",
    emotion: "thinking",
    scene: "restaurant"
  },
  {
    id: "m9",
    sender: "dani",
    text: "Yep! 100%. Now, what about an SDK?",
    emotion: "happy",
    scene: "remote"
  },
  {
    id: "m10",
    sender: "dani",
    text: "Imagine you buy a brand new, super fancy TV. 📺",
    emotion: "idle",
    scene: "remote"
  },
  {
    id: "m11",
    sender: "dani",
    text: "An API would be like knowing the exact electrical signals needed to change the channel, and having to manually wire it up every time.",
    emotion: "thinking",
    scene: "remote"
  },
  {
    id: "m12",
    sender: "dani",
    text: "But an SDK... an SDK is getting the Universal Remote in the box. 🎛️",
    emotion: "excited",
    scene: "remote"
  },
  {
    id: "m13",
    sender: "dani",
    text: "It has all the buttons pre-labeled, batteries included, and an instruction manual. It's a ready-made toolkit so you don't build it from scratch.",
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
    text: "So the API is just the waiter passing the message...",
    emotion: "happy",
    scene: "comparison"
  },
  {
    id: "m16",
    sender: "aisha",
    text: "...but the SDK is like getting the waiter, the menu, the tray, AND a VIP table all handed to you in one convenient package!",
    emotion: "excited",
    scene: "comparison"
  },
  {
    id: "m17",
    sender: "dani",
    text: "Exactly! You nailed it. ✨",
    emotion: "happy",
    scene: "comparison"
  },
  {
    id: "m18",
    sender: "aisha",
    text: "Okay, that actually makes so much sense. I'm officially a tech genius now. 💅",
    emotion: "excited",
    scene: "cheers"
  },
  {
    id: "m19",
    sender: "dani",
    text: "Cheers to that! Now, pass the cookies. 🍪",
    emotion: "happy",
    scene: "cheers"
  }
];
