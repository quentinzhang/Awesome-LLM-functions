import axios from 'axios';
import authorizeRequest from './utils/authorizeRequest';

const fetchTop5HackerNews = async (req, res) => {
  // API Key checking
  if (!authorizeRequest(req, res)) {
    return;
  }

  const HN_TOP_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
  const HN_ITEM_URL = 'https://hacker-news.firebaseio.com/v0/item/';

  try {
    // Fetch top story IDs
    const topStoryResponse = await axios.get(HN_TOP_STORIES_URL);
    const topStoryIDs = topStoryResponse.data;

    if (!Array.isArray(topStoryIDs)) {
      return res.status(500).send('Could not fetch top stories');
    }

    // Fetch details for the top 5 stories
    const top5IDs = topStoryIDs.slice(0, 5);
    const storyPromises = top5IDs.map(id => axios.get(`${HN_ITEM_URL}${id}.json?print=pretty`));
    const storyResponses = await Promise.all(storyPromises);

    // Extract relevant info from each story
    const top5Stories = storyResponses.map(response => {
      const data = response.data;
      return {
        title: data.title,
        url: data.url,
        score: data.score,
      };
    });

    res.status(200).json(top5Stories);

  } catch (error) {
    console.error("Error Details:", error);  // Add this line
    console.error('An error occurred:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

export default fetchTop5HackerNews;
