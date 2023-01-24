import React from 'react'
import { ContentWrapper, CustomContainer, TopImageBanner } from '../../styles/reusableStyle'
import header_rojgar_bazaar from "../../images/header_rojgar_bazaar.jpg";
import BottomNav from '../layouts/BottomNav';

const AllJobs = () => {
  return (
    <div className='allJobs__main'>
    <TopImageBanner src={header_rojgar_bazaar} alt="banner" />
    <CustomContainer>
        <ContentWrapper>
            PANKAJ TeSt
        </ContentWrapper>
    </CustomContainer>
    <BottomNav />
    </div>
  )
}

export default AllJobs