import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

export function App() {
    const format = (userName) => `@${userName}`;
    return (
        <>
            <TwitterFollowCard formatUserName={format} userName="_raulow" initialIsFollowing={true}> 
                Raúl Low Beattie 
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format} userName="midudev"> 
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format} userName="elonmusk"> 

            </TwitterFollowCard>
        </>
    );
}
