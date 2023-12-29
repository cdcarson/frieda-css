import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
export const GET = async () => {
	const processor = new postcss.Processor([autoprefixer()]);
	const result = await processor.process('body {color: #fc3}');
	return new Response(result.content, {
		headers: new Headers({ 'content-type': 'text/css' })
	});
};
