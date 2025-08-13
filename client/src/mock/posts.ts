import { PostModel } from "../models/PostModel";
import { post1comms, post2comms, post3comms, post4comms, post5comms, post6comms, post7comms, post8comms, post9comms, post10comms, post11comms, post12comms, post13comms, post14comms, post15comms, post16comms, post17comms, post18comms, post19comms, post20comms, post21comms, post22comms, post23comms, post24comms, post25comms } from "./comments";
import { usersMock } from "./users";

import postimg1 from './../assets/post_imgs/postimg1.png';
import postimg2 from './../assets/post_imgs/postimg2.png';
import postimg7 from './../assets/post_imgs/postimg7.jpg';
import postimg8 from './../assets/post_imgs/postimg8.jpg';
import postimg9 from './../assets/post_imgs/postimg9.jpg';

export const posts_array: PostModel[] = [];


const post1 = new PostModel(1, usersMock[4], "Somewhere over the rainbow", 
  "Some nights feel like dreams you never want to wake up from. The city lights, the calm silence, and the way the sky turns violet — it's like Tokyo is writing poetry with its own colors. #TokyoNights #CityVibes #DreamyViews", 
  postimg1, 504, post1comms, 19);

const post2 = new PostModel(2, usersMock[1], "Downtown Playground", 
  "Just picked up my new ride and took it for a spin around the city. She’s fast, clean, and turning heads already. What do you think? 😎 #NewRide #CityCruise #CarGoals", 
  postimg2, 567, post2comms, 124);

const post3 = new PostModel(3, usersMock[2], "Silent Weekend Mode", 
  "I turned off all my notifications for the weekend. No pings, no likes, no endless scrolling. Just me, my thoughts, and some real conversations. Funny how silence feels awkward at first… and then becomes peaceful. Highly recommend. #DigitalDetox #WeekendVibes #Mindfulness", 
  null, 156, post3comms, 643);

const post4 = new PostModel(4, usersMock[5], "Coffee-Stained Desk", 
  "I’ve been staring at the same project for hours. Nothing comes out. Zero inspiration. And yet, I know I have to keep going. Because creativity isn’t magic — it’s discipline dressed as chaos. So I’ll write one bad line. Then another. Eventually, something clicks. #CreativeBlock #Discipline #WorkInProgress", 
  null, 3567, post4comms, 234);

const post5 = new PostModel(5, usersMock[6], "Between Filters and Reality", 
  "Sometimes it feels like everyone’s life is a highlight reel — exotic trips, perfect photos, constant wins. But life isn’t curated. It’s messy, confusing, and beautiful in ways that don’t always fit in a square. If you’re struggling, you’re not alone. And you’re doing just fine. #RealLife #NoFilter #Authenticity", 
  null, 2174, post5comms, 357);

const post6 = new PostModel(6, usersMock[7], "Chapter One, Again", 
  "Starting over is scary. Whether it’s a new city, a new habit, or a new mindset — there’s always resistance. But growth lives in that discomfort. One small change. One brave choice. That’s all it takes to begin again. #NewBeginnings #GrowthMindset #EmbraceChange", 
  null, 124, post6comms, 99);

const post7 = new PostModel(7, usersMock[0], "Rooftop Sessions", 
  "Late night talks, shared stories, and deep laughs. Some moments don't need fancy places—just good company. #RooftopVibes #GoodCompany #Memories", 
  postimg7, 235, post7comms, 1847);

const post8 = new PostModel(8, usersMock[3], "Whispers of the Savannah", 
  "Breathtaking silence, endless horizon, and the gentle giant walking free. Nature always has the best stories to tell. #SafariLife #NatureLover #Wilderness", 
  postimg8, 8463, post8comms, 438);

const post9 = new PostModel(9, usersMock[8], "After the Fire", 
  "War steals cities, but hope still walks through the rubble. A child with a teddy bear, searching for light in the darkest hour. #Hope #Ukraine #Resilience", 
  postimg9, 756, post9comms, 378);

const post10 = new PostModel(10, usersMock[2], "Day 374 of Showing Up", 
  "Today I realized again that the hardest thing in life isn’t achieving success — it’s being consistent. Not the highs of motivation or bursts of productivity, but showing up every single day. Quietly. Without applause. That’s what really moves you forward. #Consistency #Discipline #Motivation", 
  null ,756, post10comms, 378);

const post11 = new PostModel(11, usersMock[4], "Eyes Wide Open", 
  "I used to walk the same streets every day and see nothing new. But today, I slowed down. Looked up. Noticed a bird bathing in a puddle, a smile from a stranger. The world didn’t change. I did. #MindfulMoments #SimpleJoy #Presence", 
  null, 123, post11comms, 87);

const post12 = new PostModel(12, usersMock[6], "Still Learning", 
  "I thought I had things figured out. But life keeps humbling me. Every failure, every unexpected turn — they teach more than any book. Stay open. Stay curious. #LifelongLearner #Growth #StayHumble", 
  null, 498, post12comms, 132);

const post13 = new PostModel(13, usersMock[1], "The Unsent Message", 
  "Wrote a message. Deleted it. Rewrote it. Deleted again. Some words are too heavy to send. Some silences say more than any paragraph. #Unspoken #Emotions #LettingGo", 
  null, 302, post13comms, 56);

const post14 = new PostModel(14, usersMock[0], "The Algorithm Isn’t Everything", 
  "Don't chase trends. Don’t mold your thoughts into formats that please the feed. Say what’s real. That’s how you cut through the noise. #Authenticity #RealTalk #SpeakUp", 
  null, 215, post14comms, 244);

const post15 = new PostModel(15, usersMock[7], "Rain Check", 
  "Plans got cancelled. It rained. And I ended up having the coziest evening at home with tea and a book. Not all disappointments are bad. Some are blessings in disguise. #CozyNights #UnexpectedJoy #Gratitude", 
  null, 789, post15comms, 92);

const post16 = new PostModel(16, usersMock[3], "Unfollow to Breathe", 
  "I unfollowed 300 accounts today. If it doesn’t inspire, educate, or make me smile — it’s gone. Digital space is mental space. Curate wisely. #DigitalDeclutter #MentalHealth #Boundaries", 
  null, 674, post16comms, 304);

const post17 = new PostModel(17, usersMock[8], "When the Music Stops", 
  "Sometimes the silence after your favorite song ends is more powerful than the track itself. It’s the echo that stays. The memory. The feeling. #MusicLover #Moments #Echo", 
  null, 341, post17comms, 163);

const post18 = new PostModel(18, usersMock[5], "What If?", 
  "What if we stopped doubting ourselves for just one day? What if we acted like the person we dream to become? You’re closer than you think. #BelieveInYourself #Courage #MindsetShift", 
  null, 134, post18comms, 76);

const post19 = new PostModel(19, usersMock[0], "In Transit", 
  "Airports. Headphones. Strangers. Goodbyes and new hellos. There’s something raw and beautiful about constantly moving. #TravelerThoughts #InTransit #Wander", 
  null, 542, post19comms, 198);

const post20 = new PostModel(20, usersMock[6], "Late Night Logic", 
  "It’s 2:14 AM. I suddenly understand something I couldn’t grasp all day. Maybe some thoughts need silence and darkness to come alive. #NightOwl #DeepThoughts #Breakthrough", 
  null, 991, post20comms, 231);

const post21 = new PostModel(21, usersMock[1], "The Lost Art of Boredom", 
  "I sat on the bench. No phone. No podcast. Just people watching. And slowly, boredom turned into peace. Into presence. Into clarity. #BeStill #BoredomIsGood #AnalogLife", 
  null, 112, post21comms, 68);

const post22 = new PostModel(22, usersMock[2], "Version 2.3", 
  "Not everything needs a fresh start. Sometimes you just need a small update. Fix a bug. Add a feature. You’re not broken — just evolving. #SelfUpdate #Progress #KeepGoing", 
  null, 447, post22comms, 97);

const post23 = new PostModel(23, usersMock[5], "Exit the Loop", 
  "Same thoughts. Same routines. Same people. It’s easy to get stuck. If nothing changes externally, change something internally. #BreakTheCycle #SelfAwareness #IntentionalLiving", 
  null, 865, post23comms, 212);

const post24 = new PostModel(24, usersMock[3], "Zero Likes", 
  "Posted something real today. Not for likes. Just for me. And guess what? It felt better than validation ever did. #SelfExpression #NoFilterNeeded #Freedom", 
  null, 55, post24comms, 18);

const post25 = new PostModel(25, usersMock[8], "Monochrome Days", 
  "Not every day has to be productive. Some days are grey. And that’s okay. Rest is part of the process too. #MentalHealthMatters #It’sOkay #RestDays", 
  null, 1022, post25comms, 305);


posts_array.push(post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12, post13, post14, post15, post16, post17, post18, post19, post20, post21, post22, post23, post24, post25);
