import './App.css';
import Post from './Post/Post';
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const datePost = new Date(Date.now());
const month = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'august', 'sept', 'oct', 'now', 'dec'];
function App() {
    return (
        <div>
            <Post author={{
                name: "Anakin skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader"
            }}
                  content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
                  image={RAY_IMAGE}
                  date={`${datePost.getDate()} ${month[datePost.getMonth()]}`}
            />
        </div>
    );
}
export default App;
