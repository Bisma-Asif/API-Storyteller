export type Emotion = 'idle' | 'happy' | 'confused' | 'excited' | 'thinking' | 'mindblown';
export type SceneTopic = 'intro' | 'git_diary' | 'github_cloud' | 'comparison' | 'outro';

export interface CinematicMessage {
  id: string;
  sender: 'aisha' | 'dani';
  text: string;
  emotion: Emotion;
  topic: SceneTopic;
}

export const gitGithubScript: CinematicMessage[] = [
  { id: 'g1', sender: 'aisha', text: "Dani, ek baat batao... Yeh Git aur GitHub mein aakhir farq kya hai? Sab iski baat karte hain aur main hamesha confuse ho jati hoon.", emotion: 'confused', topic: 'intro' },
  { id: 'g2', sender: 'dani', text: "Haha, koi masla nahi! Yeh dono naam almost same hain toh confusion hoti hi hai. Main asaan tareeqe se samjhati hoon.", emotion: 'happy', topic: 'intro' },
  { id: 'g3', sender: 'dani', text: "Git ko tum apni ek personal magic diary samjho. Jab bhi tum kuch likhti ho, woh diary khud ba khud har version yaad rakhti hai. Draft 1, Draft 2, Final...", emotion: 'thinking', topic: 'git_diary' },
  { id: 'g4', sender: 'aisha', text: "Acha? Matlab agar main kuch ghalat kar doon toh pichle version pe wapas ja sakti hoon?", emotion: 'excited', topic: 'git_diary' },
  { id: 'g5', sender: 'dani', text: "Bilkul! Git ek tool hai jo tumhare laptop pe chalta hai. Tumhara sara record tumhare paas safely rakhta hai.", emotion: 'happy', topic: 'git_diary' },
  { id: 'g6', sender: 'dani', text: "Ab aao GitHub pe. GitHub ko tum ek cloud photo album ya online locker samjho.", emotion: 'thinking', topic: 'github_cloud' },
  { id: 'g7', sender: 'dani', text: "Tum us diary ko GitHub pe upload kar deti ho taakay tum kahin se bhi access kar sako, aur baki dost bhi us mein apne pages add kar sakein, bina kisi ki entry kharab kiye.", emotion: 'excited', topic: 'github_cloud' },
  { id: 'g8', sender: 'aisha', text: "Ohhh!! Toh Git meri apni diary hai, aur GitHub woh online library hai kahan aisi sab diaries rakhi jati hain?", emotion: 'mindblown', topic: 'comparison' },
  { id: 'g9', sender: 'dani', text: "Perfect! Git system hai, aur GitHub woh service hai jahan tum Git projects ko store aur doston ke sath share karti ho.", emotion: 'happy', topic: 'comparison' },
  { id: 'g10', sender: 'aisha', text: "Kasam se, ab samajh aaya! Main toh abhi se apni magic diary banati hoon.", emotion: 'excited', topic: 'outro' },
  { id: 'g11', sender: 'dani', text: "Zabardast! Ab GitHub pe usko sab ke sath share karna mat bhoolna.", emotion: 'happy', topic: 'outro' }
];