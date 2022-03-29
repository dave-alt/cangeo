import React from 'react'
import Navbar from '../components/navbar'
import Skyline from '../components/skyline'
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table'; 
import {useRouter} from 'next/router'
export default function pricing() {
    const router=useRouter();
  return (
      <>
      <Navbar/>
    <div className="pricing">
        <PricingTable  highlightColor='#ef233c'>
    <PricingSlot highlighted buttonText='SIGN UP' onClick={()=>router.push('/#contact')} title='BASIC' priceText='$24/month'>
        <PricingDetail> <b>35</b> projects</PricingDetail>
        <PricingDetail> <b>15 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  buttonText='SIGN UP' onClick={()=>router.push('/#contact')} title='PROFESSIONAL' priceText='$99/month'>
        <PricingDetail> <b>100</b> projects</PricingDetail>
        <PricingDetail> <b>30 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot   buttonText='SIGN UP' onClick={()=>router.push('/#contact')} title='ENTERPRISE' priceText='$200/month'>
        <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
        <PricingDetail> <b>75 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
</PricingTable>
        </div>
        <Skyline/>
    </>
  )
}
