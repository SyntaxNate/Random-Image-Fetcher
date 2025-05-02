Image fetcher
----------------
This is basically a random image generator made with react. I wanted to practice hooks such as useState and useEffect.
The useState hook holds the image and loading state. The useEffect runs the component loads. 
The image state variable starts off empty and later holds the actual image url.
The loading state variable starts off as true and tells the UI if we are waiting on a new image.
In this particular code I just set a new url for simplicity reasons to focus on how to utilize hooks, however we could insert an await function to retrieve JSON. 
To turn on the loading text we put setLoading(true).

This piece of code creates a random url from piscum photos website to display something different everytime. The ?random=${...} forces the browser to load a new image everytime.
const randomImageUrl = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`;

The useEffect hook runs only once, when the component first loads. For example get the first image as soon as we show the page.
Styling in the div centers the image and button. If loading is true ---> show loading. If loading is false ---> show the image stored Url. When the button is clicked call fetchImage() function and a new image appears. 

