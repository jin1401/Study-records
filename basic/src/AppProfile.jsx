import "./App.css";
import Profile from './components/Profile';

function AppProfile() {
    const handleClick = (event)=>{
        console.log(event);
        alert('button has clicked!');
    }
    return (
        <>
            <button onClick={handleClick}>버튼</button>
            <Profile 
                image='https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60' 
                name='Parrot Park'
                title='프론트앤드 개발자' 
                isNew={true}
            />
            <Profile 
                image='https://images.unsplash.com/photo-1694901555616-d7b2b33e6406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1400&q=60' 
                name='Nomad Can'
                title='백앤드 개발자' 
            />
            <Profile 
                image='https://images.unsplash.com/photo-1693307418199-4af8f979e50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60' 
                name='Code Rider'
                title='프론트앤드 개발자' 
            />
        </>
    );
}

export default AppProfile;
