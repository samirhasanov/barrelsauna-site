import type { RouteKey } from './routes';

export interface SocialVideo {
  platform: 'tiktok' | 'instagram';
  url: string;
  thumb?: string; // image name in src/assets/social (without extension)
  caption: string;
  section: RouteKey | 'general' | 'process';
  views: number;
}

/** Top TikTok + Instagram videos of @barrelsauna.az, sorted by views (collected 2026-10-14). */
export const VIDEOS: SocialVideo[] = [
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7328061145426791698",
    "thumb": "tiktok-7328061145426791698",
    "caption": "Qiymətlə bağlı səhifəmizə yazın🥰",
    "section": "barrel",
    "views": 554900
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7686535459299659026",
    "thumb": "tiktok-7686535459299659026",
    "caption": "Həyətinizdə özünüzə özəl rahatlıq guşəsi yaratmağın tam zamanıdır!",
    "section": "barrel",
    "views": 163600
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DDfNtrYug29/",
    "thumb": "instagram-DDfNtrYug29",
    "caption": "Azərbaycanda ilk dəfə — odunla qızan hot tub",
    "section": "jacuzzi",
    "views": 122000
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DaGFSJXsKYY/",
    "thumb": "instagram-DaGFSJXsKYY",
    "caption": "Xəyallarınızdakı sauna cəmi 6x2.5 metrədə",
    "section": "indoor",
    "views": 110000
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7571880262007639316",
    "thumb": "tiktok-7571880262007639316",
    "caption": "Fsünkar və gözoxşayan daxili saunaların yığılması üçün müraciət edə bilərsiniz!!!",
    "section": "indoor",
    "views": 65600
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DZ201KCMVua/",
    "thumb": "instagram-DZ201KCMVua",
    "caption": "Günün bütün yorğunluğunu 15 dəqiqədə unudun",
    "section": "indoor",
    "views": 65000
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/C4MoyW2IDjX/",
    "thumb": "instagram-C4MoyW2IDjX",
    "caption": "Qarşılayın… Azərbaycanda Barrel Sauna",
    "section": "barrel",
    "views": 63300
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/C8pQUv3twbZ/",
    "thumb": "instagram-C8pQUv3twbZ",
    "caption": "Azərbaycanda outdoor sauna",
    "section": "cube",
    "views": 50100
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7534031275942874376",
    "thumb": "tiktok-7534031275942874376",
    "caption": "🔥 Azərbaycanda İlk Dəfə – Odunla Qızdırılan Jakuzilər!",
    "section": "jacuzzi",
    "views": 49300
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7471530175511989522",
    "thumb": "tiktok-7471530175511989522",
    "caption": "🪵İstənilən növ və dizaynda outdoor saunaların, jakuzi və hot tub'ların hazırlanması.",
    "section": "spa",
    "views": 44900
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7684323606632910087",
    "thumb": "tiktok-7684323606632910087",
    "caption": "Həyətinizdə öz şəxsi spa küncünüzü yaratmağa nə deyirsiniz?",
    "section": "cube",
    "views": 39500
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7485305321871723794",
    "thumb": "tiktok-7485305321871723794",
    "caption": "Endirimli qiymət üçün bizə müraciət edin!",
    "section": "barrel",
    "views": 34800
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DdZPZ3CMBWn/",
    "thumb": "instagram-DdZPZ3CMBWn",
    "caption": "Həyətimizdə spa zonası yaradırıq",
    "section": "barrel",
    "views": 4656
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DZvC4CAMqjK/",
    "thumb": "instagram-DZvC4CAMqjK",
    "caption": "Bu sistem saunada tam rahatlıq yaradır",
    "section": "indoor",
    "views": 4383
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/Da0hI3zMxgV/",
    "thumb": "instagram-Da0hI3zMxgV",
    "caption": "Rahatlığın yeni ünvanı",
    "section": "process",
    "views": 3852
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DbTYXchMQcS/",
    "thumb": "instagram-DbTYXchMQcS",
    "caption": "Azərbaycana səs salan ilk mobil sauna",
    "section": "portable",
    "views": 3811
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DbD4IHzMbEa/",
    "thumb": "instagram-DbD4IHzMbEa",
    "caption": "Amburan layihəmiz hazırdır",
    "section": "cabin",
    "views": 3005
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7692827116043242770",
    "thumb": "tiktok-7692827116043242770",
    "caption": "Evinizin həyətini 5 ulduzlu lüks SPA mərkəzinə çevirin!",
    "section": "spa",
    "views": 1721
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7685430184941604114",
    "thumb": "tiktok-7685430184941604114",
    "caption": "Günün bütün stresini unudacağınız bir məkanda olmaq necə hisskən?",
    "section": "indoor",
    "views": 1595
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7691724231830244616",
    "thumb": "tiktok-7691724231830244616",
    "caption": "Evinizdə lüks və rahatlığı bir araya gətirmək istəyənlər üçün möhtəşəm ideya!",
    "section": "indoor",
    "views": 1488
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7672790774446132488",
    "thumb": "tiktok-7672790774446132488",
    "caption": "Öz həyətinizdə belə bir SPA olmasını istərdiniz?",
    "section": "cabin",
    "views": 1287
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7687704819997429010",
    "thumb": "tiktok-7687704819997429010",
    "caption": "Ağacın təbii qoxusu, bədəni sarıyan o həzin istilik və sadəcə öz nəfəsinə fokuslandığın …",
    "section": "general",
    "views": 1249
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7682083243155393810",
    "thumb": "tiktok-7682083243155393810",
    "caption": "Sıfırdan başlayan bir layihənin, dinclik tapacağınız bir məkana çevrilməsi.",
    "section": "process",
    "views": 1106
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7689128458923937031",
    "thumb": "tiktok-7689128458923937031",
    "caption": "Bir ideya ilə başladı, emalatxanada formalaşdı, bağçada həyata keçdi.",
    "section": "process",
    "views": 1063
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7690590341698735368",
    "thumb": "tiktok-7690590341698735368",
    "caption": "Həftənin yorğunluğunu geridə qoymaq və tamamilə dincəlmək istəyirsiniz?",
    "section": "indoor",
    "views": 971
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7693946008849648903",
    "thumb": "tiktok-7693946008849648903",
    "caption": "Sıfırdan başlayan tikinti və möhtəşəm transformasiya!",
    "section": "process",
    "views": 868
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7695066879542562066",
    "thumb": "tiktok-7695066879542562066",
    "caption": "Evinizdə və ya bağınızda 5 ulduzlu spa hüzuru yaşamağa hazırsınız?",
    "section": "cottage",
    "views": 812
  }
];
