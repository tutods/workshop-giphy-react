import { Grid } from '@chakra-ui/react';
import Gif from 'components/gifs/Gif';
import { useGiphy } from 'contexts/GiphyContext';

const GifGrid = () => {
	const { listOfGifs, setCurrentGif } = useGiphy();

	return (
		<Grid
			maxH={'100vh'}
			overflowY={'auto'}
			padding={10}
			templateColumns={['1fr', 'repeat(2, 1fr)']}
			gap={4}
		>
			{listOfGifs?.gifs.map((gif: string) => (
				<Gif onClick={() => setCurrentGif(gif)} id={gif} key={gif} />
			))}
		</Grid>
	);
};

export default GifGrid;