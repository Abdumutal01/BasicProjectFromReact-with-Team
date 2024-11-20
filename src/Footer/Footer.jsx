import React from 'react'
import '../Header/HeaderHero/HeaderHero.css'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__logoBox">
        <div className="container">
          <h1 className="hero__logoTitle">
            Agri<span>Al</span>
          </h1>
        </div>
      </div>
      <div className="footer__general">
        <div className="container footer__general2">
          <ul className="footer__lists">
            <h3 className="footer__title">
              Biz haqimizda
            </h3>
            <li className="footer__inner">
              Kompaniya haqida ma’lumot
            </li>
            <li className="footer__inner">
              Foydalanuvchi shartnomasi
            </li>
            <li className="footer__inner">
              Bog’lanish
            </li>
            <li className="footer__inner">
              Ijtimoiy tarmoqlarimiz
            </li>
          </ul>
          <ul className="footer__lists">
            <h3 className="footer__title">
              Katigoriyalar
            </h3>
            <li className="footer__inner">
              Asosiy
            </li>
            <li className="footer__inner">
              O’g’itlar
            </li>
            <li className="footer__inner">
              Zararkulandalar
            </li>
            <li className="footer__inner">
              Aksiyalar
            </li>
            <li className="footer__inner">
              Mijozlar tanlovi
            </li>
          </ul>
          <ul className="footer__lists">
            <h3 className="footer__title">
              Boshqa
            </h3>
            <li className="footer__inner">
              Ilova tili
            </li>
            <li className="footer__inner">
              Ilovani yuklab olish
            </li>
            <div className="footer__appImgBox">
              <img
                src="https://s3-alpha-sig.figma.com/img/23ef/b59f/e46bb28199c9c4d56b72fb37a3ba26c9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lEtXE73RmLG~DEP1KJTZCdx~LqifIiFUrJ0yosxC~tF3Qnoz6XQckN9b0fW368ugyreEbebZw9mAIXJCqQOfia-WK3DQO5ftzqsx1ul7-LBTEOSVAwfBxKfOpGw-cFCAz--yhrCdA880zxlPk4WgI6K27PuPoDLp~WFRpUqzje-acO9HxzSDz4QgomGJXwWh9UINRslRFJfVfgyxtdKL55qzoh-wZhKIlfImhgtIr-pWM~XF8ODMiX-84VDBCN2eUTLmn7u-AYdpSToysSF5-9u-BTTpJlE-rhbJ~3dUQHr1gy6XSebE8TtpRCqhYA7ylNfm70CKPGDczhD6IjiCyQ__"
                alt=""
                className="footer__appImg"
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/b49e/ccb4/101f67d951c8c82a0d0e8b314f3282dc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WalPyycnTLhFa2pnOBGEVKZhXKR03xlS8rl-Vc3tpfIi23~~CvBbkHK8RYz~KrbYfvRPCwvZqEsEBstXafY0hT0I6njs7Y~O2AjmJCACYfYcSI2bt4p8WfmG3ZIalVRSmj5uOoOlMXr0~L5PfiIi4RtMleK2rRjoJCTqCXFeHaFpraKAejtiG9aIaHDgMZLLfzCw4rCF9HUAR6gJt-LLmV7-ctYuJ4-eKWkS3ilp0F06j1cioC0AMSp-ZUrPYu~kKoyubwrdB9Vk36DWGutQ-3~LZApjY5zcUZV2t6qBhTnQsl4AaWjIg8ZImGXDddmMhslx8zKFWT-CK8rCzvBYKg__"
                alt=""
                className="footer__appImg"
              />
            </div>
          </ul>
          <ul className="footer__lists">
            <h3 className="footer__title">
              Ishtimoyi tarmoqlar
            </h3>
            <li className="footer__item">
              <a
                className='footer__inner'
                href="https://www.instagram.com/"
              >
                Instagram
              </a>
              <img
                src="https://s3-alpha-sig.figma.com/img/dc2b/20fe/0414c863c24bdf59fc0aeac94a0dc36e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DKZSLSfsOqDZ~d5Xn61lF9mLgo83v0~xhx1zlVZAQOXRdc0UYMSJw2lZS3skITEoEIrY2om0IOhHaOsXTx~P1BzdeWlU5rwR4eL7PouijQCVM9y0jfSSV17jL5CzQCjkG1oaCyW5MtqwbTuZVNUuE-lsukEWY4XTfyLFIHqeNqiESV1PsGmNBGTqTpmBJEdvVThkXdnYvDSJHeIdJT2lhKfeNM6QFRKuJQS5bbNf1tJL9NCTe7vdNAUlbkgUZ1FHzzKMcwW6KvBgdiUJhrwUmoY5J1Li~cE0nJxW9TKXpssz9ch-L12yqsiwBqbkgTYLlUssRImZXMmL6pKUvTHAEQ__"
                alt="" className="footer__iconImg"
              />
            </li>
            <li className="footer__item">
              <a
                className='footer__inner'
                href="https://www.telegram.com/"
              >
                Telegram
              </a>
              <img
                src="https://s3-alpha-sig.figma.com/img/7b36/dc56/2887bf207f329c841edc915f203ac60b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owx5kRlFP0CA8-OaDctCbPZC3IMEVzu17SoBkWTc6Fo96alsSKJKvHqDqxWQ43h38MDyFFMcV38qz~6TDXX7HX05nqQSex5up2eEzP~jsMn1V9cGAK5ADr4T4va7VLCZL2YZzi8rlO9gLS16x7ELnzik3hkIhQ2qPxVraO-AjnNOThrrPXMGQQvE-vj8xH~OWLU56loTsbOc1SszDYuArLGQV1s2nF~B~QZwpvXLshUPtBLbJeT24ZVoN6tKVABl7IsBv~iIZRz08KK7ttyqV3PGxZEZ-tA0v0jbSnxpq6gUPuF76BlCuQbafjctbx20XEZJYO0Vl7jdcyGxjCc0Xw__"
                alt=""
                className="footer__iconImg"
              />
            </li>
            <li className="footer__item">
              <a
                className='footer__inner'
                href="https://www.facebook.com/"
              >
                Facebook
              </a>
              <img
                src="https://s3-alpha-sig.figma.com/img/c278/62e1/f5904358e7539f7ea74fc4de3ac39ebb?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hz5rdi9Vk9plekX1UngyZKylCxSbmNYbCQ8iYdunOkHehHZiX9UxmtGsFHF4UqlRPJ8QS-Nh3v6hVggO47QF9EJD1hOIeDZfCwAfqzqy1JNXdv-vGk0PMBqUK-pNWay0jOwEtpfagu1OGsKRZMqtNZZOGDEQ9zim3SiMDsvf9PHvxwSkKf~hiMZHEuy3SESIoBcEp6lg6Il~2i0emoy5W1tRYPeyAg7wOSqqAguqocsqaOYdzH1x64HR~Il6OfkKsZMOtaWHQ0E9ZhVx7ynHB2c8mtUuD1SN0SYoQCCGuWc4S9kw0ULcdygKRubBxeub~aVCxRQ0~Grz7HCqpnJnIw__"
                alt=""
                className="footer__iconImg"
              />
            </li>
            <li className="footer__item">
              <a
                className='footer__inner'
                href="https://www.youtube.com/"
              >
                You Tube
              </a>
              <img
                src="https://s3-alpha-sig.figma.com/img/8a3f/c3ec/b1b184e97578d5dca6d9f8f0d87d981b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m1hNr~Pyhde8lOfeOzllDhogGVJ1JagqiRK0clQX-xKclNL0L5EULhziDsqEG7qFeulwoL006qftHvb9~~u3j-CPvIiojHUHmc-oBaGqLdzeaGkk3HXZyZApejp8P409QF4mKjAHG4lt7Fs7un~c0uajDFpN7aFLWMhoNaj-3rW2aIsRiRAZA4lGESSEbTEOJUpQPYHgs8l2-XVFLy1Gj~vRJF~g9GFTWncr4~CTe07Inr1IDZfbKWQswRBDoTd2WsEUmRjT~DzEnZ8a2IPyLSf0QdAtQzGtu8pz0UbB0IBYhn4rfkBUeve~mdgNtgyc5UMRbOoo2WzGbI6gKDfXmw__"
                alt=""
                className="footer__iconImg"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
