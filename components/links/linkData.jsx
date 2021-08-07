import { useMemo } from 'react';

export const LinkData = () => {
  return useMemo(() => {
    return [
      { href: 'https://tailwindcss.com/', title: 'Tailwind.css' },
      {
        href: 'https://play.tailwindcss.com/f91h03y87s',
        title: 'Tailwind Play',
      },
      {
        href: 'https://umeshmk.github.io/Tailwindcss-cheatsheet/',
        title: 'Tailwindcss cheatsheet v-2.0',
      },
      {
        href: 'https://zenn.dev/junki555/articles/45614f64695b77a2ae78',
        title: 'TailwindCSS で モバイル縦画面表示時のみ消える要素を作る',
      },
      {
        href: 'https://tailwindcomponents.com/cheatsheet/',
        title: 'Tailwind Components cheatsheet',
      },
      {
        href: 'https://nerdcave.com/tailwind-cheat-sheet',
        title: 'Tailwind-Cheat-Sheet',
      },
      { href: 'https://tailblocks.cc/', title: 'Tailblocks' },
      { href: 'https://tailwindtemplates.io/', title: 'Tailwind Templates' },
      { href: 'https://daisyui.com/', title: 'Daisy UI' },
      {
        href: 'https://devdojo.com/tailwindcss/buttons',
        title: 'TailwindCSS Buttons',
      },
      {
        href: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation',
        title: 'TAILWIND STARTER KIT',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss',
        title: 'Tailwind CSS IntelliSense',
      },
      { href: 'https://chakra-ui.com/', title: 'Chakra UI' },
      { href: 'https://headlessui.dev/', title: 'headless UI' },
      {
        href: 'https://www.nxworld.net/tailwind-css-resources.html',
        title:
          'UIキットやブロック・コンポーネント集など、Tailwind CSS使用時の参考リソース',
      },
      {
        href: 'https://zenn.dev/taishi/articles/da33057d2c317d5068c1',
        title: '全米が待ち望んでいた超便利なTailwind CSSツールリスト',
      },
    ];
  }, []);
};
