import square from './assets/square.svg';
import quote from './assets/quote.svg';

function App() {
  return (
    <div className="h-[100vh] bg-primary p-xxl">
      <div className="bg-white h-full flex">
        <div className="bg-surface p-xxl rounded-md w-1/2 gap-xxl flex flex-col">
          <img width='36px' src={square} alt="square" className='text-primary'/>
          <p className="text-grey-900 text-heading-xl">Enterprise grade <br></br> Design System for <br></br> the world</p>
          <p className="text-grey-600 text-body-md">Flek.ai keeps your Design Tokens synced across Figma <br></br> & all your platforms (iOS, Android & Web)</p>
          <div className="bg-grey-500 rounded-md border-24 pl-xxl shadow-md pb-xxl border border-black">
            <img width='65px' src={quote} alt="quote" className='text-primary'/>
            <p className="text-primary text-heading-xl pt-xxl">Let’s flek it!</p>
            <p className="text-primary text-body-md">Design system in 90% companies <br></br> are broken, let’s flek it!</p>
          </div>
        </div>
        <div className="bg-white rounded-md w-1/2 flex flex-col justify-center gap-xl items-center">
          <p className="text-grey-900 text-heading-xl">Get started</p>
          <p className="text-grey-600 text-body-md">Create your account now!</p>
          <div className='w-3/4 flex flex-col gap-xxl p-l'>
            <div className='gap-xs'>
              <p className="text-grey-600 text-body-md">Full Name</p>
              <input className='border border-grey-500 p-2 w-full text-grey-900 text-body-md' value='Destiny Gems'></input>
            </div>
            <div className='gap-xs'>
              <p className="text-grey-600 text-body-md">Email</p>
              <input className='border border-grey-500 p-2 w-full text-grey-900 text-body-md' value='connect@flek.ai'></input>
            </div>
            <div className='gap-xs'>
              <div className='flex justify-between'>
                <p className="text-grey-600 text-body-md">Password</p>
                <p className="text-success text-body-md">Success!</p>
              </div>
              <input className='border border-grey-500 p-2 w-full text-grey-900 text-body-md' value='**********'></input>
            </div>
            <button className='bg-primary p-m text-center text-white'>Sign Up</button>
            <div className='flex gap-xs justify-center'>
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
