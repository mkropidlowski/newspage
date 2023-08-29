const News = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
    return <div>Selected by category : {slug}</div>;
};

export default News;
