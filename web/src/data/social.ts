import type { RouteKey } from './routes';

export interface SocialVideo {
  platform: 'tiktok' | 'instagram';
  url: string;
  thumb?: string; // image name in src/assets/social (without extension)
  caption: string;
  section: RouteKey | 'general' | 'process';
}

/** From _research/social (TikTok / Instagram @barrelsauna.az), sorted by TikTok views. Instagram reels mirror the TikToks. */
export const VIDEOS: SocialVideo[] = [
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7328061145426791698",
    "thumb": "tiktok-7328061145426791698",
    "caption": "Qiymətlə bağlı səhifəmizə yazın🥰",
    "section": "barrel"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7686535459299659026",
    "thumb": "tiktok-7686535459299659026",
    "caption": "Həyətinizdə özünüzə özəl rahatlıq guşəsi yaratmağın tam zamanıdır!",
    "section": "barrel"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7571880262007639316",
    "thumb": "tiktok-7571880262007639316",
    "caption": "Fsünkar və gözoxşayan daxili saunaların yığılması üçün müraciət edə bilərsiniz!!!",
    "section": "indoor"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7534031275942874376",
    "thumb": "tiktok-7534031275942874376",
    "caption": "🔥 Azərbaycanda İlk Dəfə – Odunla Qızdırılan Jakuzilər!",
    "section": "jacuzzi"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7471530175511989522",
    "thumb": "tiktok-7471530175511989522",
    "caption": "🪵İstənilən növ və dizaynda outdoor saunaların, jakuzi və hot tub'ların hazırlanması.",
    "section": "spa"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7684323606632910087",
    "thumb": "tiktok-7684323606632910087",
    "caption": "Həyətinizdə öz şəxsi spa küncünüzü yaratmağa nə deyirsiniz?",
    "section": "cube"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7485305321871723794",
    "thumb": "tiktok-7485305321871723794",
    "caption": "Endirimli qiymət üçün bizə müraciət edin!",
    "section": "barrel"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7692827116043242770",
    "thumb": "tiktok-7692827116043242770",
    "caption": "Evinizin həyətini 5 ulduzlu lüks SPA mərkəzinə çevirin!",
    "section": "spa"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7685430184941604114",
    "thumb": "tiktok-7685430184941604114",
    "caption": "Günün bütün stresini unudacağınız bir məkanda olmaq necə hisskən?",
    "section": "indoor"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7691724231830244616",
    "thumb": "tiktok-7691724231830244616",
    "caption": "Evinizdə lüks və rahatlığı bir araya gətirmək istəyənlər üçün möhtəşəm ideya!",
    "section": "indoor"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7672790774446132488",
    "thumb": "tiktok-7672790774446132488",
    "caption": "Öz həyətinizdə belə bir SPA olmasını istərdiniz?",
    "section": "cabin"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7687704819997429010",
    "thumb": "tiktok-7687704819997429010",
    "caption": "Ağacın təbii qoxusu, bədəni sarıyan o həzin istilik və sadəcə öz nəfəsinə fokuslandığın …",
    "section": "general"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7682083243155393810",
    "thumb": "tiktok-7682083243155393810",
    "caption": "Sıfırdan başlayan bir layihənin, dinclik tapacağınız bir məkana çevrilməsi.",
    "section": "process"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7689128458923937031",
    "thumb": "tiktok-7689128458923937031",
    "caption": "Bir ideya ilə başladı, emalatxanada formalaşdı, bağçada həyata keçdi.",
    "section": "process"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7690590341698735368",
    "thumb": "tiktok-7690590341698735368",
    "caption": "Həftənin yorğunluğunu geridə qoymaq və tamamilə dincəlmək istəyirsiniz?",
    "section": "indoor"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7693946008849648903",
    "thumb": "tiktok-7693946008849648903",
    "caption": "Sıfırdan başlayan tikinti və möhtəşəm transformasiya!",
    "section": "process"
  },
  {
    "platform": "tiktok",
    "url": "https://www.tiktok.com/@barrelsauna.az/video/7695066879542562066",
    "thumb": "tiktok-7695066879542562066",
    "caption": "Evinizdə və ya bağınızda 5 ulduzlu spa hüzuru yaşamağa hazırsınız?",
    "section": "cottage"
  }
];

export const REELS: SocialVideo[] = [
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DeUb5F-M2_R/",
    "thumb": "instagram-DeUb5F-M2_R",
    "caption": "Evinizdə və ya bağınızda 5 ulduzlu spa hüzuru yaşamağa hazırsınız?",
    "section": "cottage"
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DeMqcrrsqdn/",
    "thumb": "instagram-DeMqcrrsqdn",
    "caption": "Sıfırdan başlayan tikinti və möhtəşəm transformasiya!",
    "section": "process"
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DeE5g2cMEms/",
    "thumb": "instagram-DeE5g2cMEms",
    "caption": "Evinizin həyətini 5 ulduzlu lüks SPA mərkəzinə çevirin!",
    "section": "spa"
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/Dd9PzQdsHCE/",
    "thumb": "instagram-Dd9PzQdsHCE",
    "caption": "Evinizdə lüks və rahatlığı bir araya gətirmək istəyənlər üçün möhtəşəm ideya!",
    "section": "indoor"
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/Dd1YORQM0JH/",
    "thumb": "instagram-Dd1YORQM0JH",
    "caption": "Həftənin yorğunluğunu geridə qoymaq və tamamilə dincəlmək istəyirsiniz?",
    "section": "indoor"
  },
  {
    "platform": "instagram",
    "url": "https://www.instagram.com/reel/DdrOzmesdxz/",
    "thumb": "instagram-DdrOzmesdxz",
    "caption": "Bir ideya ilə başladı, emalatxanada formalaşdı, bağçada həyata keçdi.",
    "section": "process"
  }
];
