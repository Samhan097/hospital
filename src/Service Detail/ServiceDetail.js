import React from 'react'
import ServiceDetailHero from './ServiceDetailHero'
import ButtonAppBar from '../ButtonAppBar'
import BabyImmunizationSchedule from './BabyImmunizationSchedule'
import MotherImmunization from './MotherImmunization'
import ImmunizationImages from './ImmunizationImages'
import PreventDiseases from './PreventDiseases'
import Footer from '../Footer/Footer'

export default function ServiceDetail() {
  return (
    <div>
        <ButtonAppBar />
        <ServiceDetailHero />
        <BabyImmunizationSchedule />
        <MotherImmunization />
        <ImmunizationImages />
        <PreventDiseases />
        <Footer />
    </div>
  )
}
