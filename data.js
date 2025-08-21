export const categories = [
  {
    id: 'fiction',
    name: 'روايات',
    description: 'عوالم خيالية، حبكات مشوقة، وشخصيات لا تُنسى.',
    accent: '#86b5ff'
  },
  {
    id: 'nonfiction',
    name: 'كتب معرفية',
    description: 'سير ذاتية، تاريخ، ثقافة، وتطوير ذات.',
    accent: '#8dd0ff'
  },
  {
    id: 'kids',
    name: 'أطفال',
    description: 'قصص ممتعة وتعليمية للصغار.',
    accent: '#ffd38d'
  },
  {
    id: 'science',
    name: 'علوم',
    description: 'فيزياء، فضاء، بيولوجيا وتقنية بأسلوب مبسط.',
    accent: '#a3ffdd'
  },
  {
    id: 'business',
    name: 'أعمال',
    description: 'إدارة، تسويق، ريادة وبناء شركات.',
    accent: '#ffb3c1'
  }
];

// توليد بيانات كتب وهمية لكل تصنيف
const lipsum = [
  'رحلة عبر الزمن تكشف أسرارًا دفينة.',
  'دليل عملي لفهم الذات وتحسين العادات.',
  'مغامرة مشوقة في مدينةٍ لا تنام.',
  'اكتشافات علمية تغيّر نظرتك للعالم.',
  'قصة صداقة تنمو رغم المسافات.'
];

const authors = ['إيمان الزهراني', 'طارق الحمد', 'سارة منصور', 'ليث العبدالله', 'نور اللبدي', 'عبدالرحمن شوقي'];

const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const books = categories.flatMap((category) => {
  const count = 10; // 10 كتب وهمية لكل تصنيف
  const generated = [];
  for (let i = 0; i < count; i++) {
    const id = `${category.id}-${i + 1}`;
    const title = `${category.name} ${i + 1}`;
    const author = randomChoice(authors);
    const price = +(Math.random() * 80 + 20).toFixed(2);
    const description = randomChoice(lipsum);
    const coverHue = Math.floor(Math.random() * 360);
    const cover = `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'>
        <defs>
          <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0%' stop-color='hsl(${coverHue},70%,55%)'/>
            <stop offset='100%' stop-color='hsl(${(coverHue+40)%360},70%,45%)'/>
          </linearGradient>
        </defs>
        <rect width='300' height='400' rx='16' fill='url(#g)'/>
        <rect x='22' y='30' width='256' height='24' rx='8' fill='rgba(255,255,255,.7)'/>
        <rect x='22' y='70' width='200' height='16' rx='8' fill='rgba(255,255,255,.6)'/>
        <rect x='22' y='100' width='170' height='16' rx='8' fill='rgba(255,255,255,.6)'/>
        <rect x='22' y='130' width='240' height='10' rx='6' fill='rgba(255,255,255,.5)'/>
      </svg>
    `)}`;
    generated.push({ id, title, author, price, description, cover, categoryId: category.id });
  }
  return generated;
});

export function getBooksByCategory(categoryId) {
  return books.filter((b) => b.categoryId === categoryId);
}

export function searchBooks(query) {
  const q = query.trim().toLowerCase();
  if (!q) return books;
  return books.filter((b) =>
    b.title.toLowerCase().includes(q) ||
    b.author.toLowerCase().includes(q) ||
    categories.find((c) => c.id === b.categoryId)?.name.toLowerCase().includes(q)
  );
}
