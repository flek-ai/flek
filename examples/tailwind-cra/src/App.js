import square from './assets/square.svg';
import quote from './assets/quote.svg';

function App() {
  return (
    <div className="h-[100vh] bg-primary p-44">
      <div className="bg-white h-full flex">
        <div className="bg-surface p-44 rounded-24 w-1/2 gap-44 flex flex-col">
          <img width='36px' src={square} alt="square" className='text-primary'/>
          <p className="text-grey-900 text-heading-xl">Enterprise grade <br></br> Design System for <br></br> the world</p>
          <p className="text-grey-600 text-body-md">Flek.ai keeps your Design Tokens synced across Figma <br></br> & all your platforms (iOS, Android & Web)</p>
          <div className="bg-grey-500 rounded-24 border-24 pl-44 shadow-default pb-44 border border-black">
            <img width='65px' src={quote} alt="quote" className='text-primary'/>
            <p className="text-primary text-heading-xl pt-44">Let’s flek it!</p>
            <p className="text-primary text-body-md">Design system in 90% companies <br></br> are broken, let’s flek it!</p>
          </div>
        </div>
        <div className="bg-white rounded-24 w-1/2 flex flex-col justify-center gap-36 items-center">
          <p className="text-grey-900 text-heading-xl">Get started</p>
          <p className="text-grey-600 text-body-md">Create your account now!</p>
          <div className='w-3/4 flex flex-col gap-44 p-24'>
            <div className='gap-8'>
              <p className="text-grey-600 text-body-md">Full Name</p>
              <input className='border border-grey-500 p-2 w-full text-grey-900 text-body-md' value='Destiny Gems'></input>
            </div>
            <div className='gap-8'>
              <p className="text-grey-600 text-body-md">Email</p>
              <input className='border border-grey-500 p-2 w-full text-grey-900 text-body-md' value='connect@flek.ai'></input>
            </div>
            <div className='gap-8'>
              <div className='flex justify-between'>
                <p className="text-grey-600 text-body-md">Password</p>
                <p className="text-success text-body-md">Success!</p>
              </div>
              <input className='border border-grey-500 p-2 w-full text-grey-900 text-body-md' value='**********'></input>
            </div>
            <button className='bg-primary p-16 text-center text-white'>Sign Up</button>
            <div className='flex gap-8 justify-center'>
              <p className="text-grey-600 text-body-md">Have an account?</p>
              <a href='/#' className="text-success text-body-md">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
