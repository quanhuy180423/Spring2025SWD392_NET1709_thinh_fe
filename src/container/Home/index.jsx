import Banner from '@containers/Banner/index.jsx'
import PriceList from '@containers/PriceList/index.jsx'
import RegisterVaccination from '@containers/RegisterVaccination/index.jsx'
import AboutUsPage from '@pages/AboustUsPage/index.jsx'
import BlogPage from '@pages/BlogPage/index.jsx'
import VaccinationGuidePage from '@pages/VaccinationGuide/index.jsx'

const Home = () => {
    return (
        <div>
       <div name = "home" >
           <Banner/>
       </div>
       <div name = "guide" className="h-[80vh] flex items-center justify-center"> 
            <VaccinationGuidePage/>
       </div>
       <div name = "service" className="h-screen flex items-center justify-center">
           <h1 className="text-4xl font-bold text-center">Service</h1>
       </div>
       <div name = "price List" className="h-screen flex items-center justify-center">
           <PriceList/>
       </div>
       <div name = "registerVaccination" className="h-screen flex items-center justify-center">
        <RegisterVaccination/>
       </div>
       <div name = "about Us" className="h-screen flex items-center justify-center">
           <AboutUsPage/>
       </div>
       <div name="blog" className='h-screen flex items-center justify-center'>
            <BlogPage/>
       </div>
       </div>
    )
}

export default Home