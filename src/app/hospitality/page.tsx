import HospitalityIntro from '@/components/Hospitality/HospitalityIntro'
import HospitalityLanding from '@/components/Hospitality/HospitalityLanding'
import HospitalityRepresentation from '@/components/Hospitality/HospitalityRepresentation'
import HospitalityService from '@/components/Hospitality/HospitalityService'
import HospitalityWhyDoWeDo from '@/components/Hospitality/HospitalityWhatDoWeDo'
import WeConsult from '@/components/Hospitality/WeConsult'
import WhoDoWeWorkWith from '@/components/Hospitality/WhoDoWeWorkWith'
import Serving from '@/components/Tourism/Serving'
import TourismWhatWeDo from '@/components/Tourism/TourismWhatWeDo'
import React from 'react'

const HospitalityPage = () => {
  return (
    <>
      <HospitalityLanding />
      <HospitalityIntro />
      <HospitalityWhyDoWeDo />
      <HospitalityRepresentation />
      <WhoDoWeWorkWith />
      {/* <HospitalityService /> */}
      <Serving />
    <TourismWhatWeDo />
      <WeConsult />
    </>
  )
}

export default HospitalityPage
