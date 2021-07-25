function Page({ stars }) {
  return <div>Next stars: {stars}</div>;
}

Page.getStaticProps = async ctx => {
  const res = await fetch('https://cofocus-dev-v1.vercel.app/api/content');
  const json = await res.json();
  return { stars: json.component };
};

return {
  props: { json },
  // Re-generate the post at most once per second
  // if a request comes in
  revalidate: 10,
}

export default Page;