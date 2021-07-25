function Page({ stars }) {
  return <div>Next stars: {stars}</div>;
}

Page.getStaticProps = async ctx => {
  const res = await fetch('https://cofocus-dev-v1.vercel.app/api/content');
  const json = await res.json();
  return { stars: json.component,  revalidate: 10, //  };
};

export default Page;