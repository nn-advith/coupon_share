import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {  coupons, getPublicCoupons, claimed } from '../../redux/slice/couponSlice';
import {Link} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
import { BodyContainer, Button, Subhead, NavButton } from '../Reusable/Reusable';
import CouponCard from '../CouponCard/CouponCard';
import PaginationBar from '../PaginationBar/PaginationBar';
import {BarLoader} from 'react-spinners';

const ViewCoupon = () => {


  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5)

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  

  const pc = useSelector(coupons)
  const cl = useSelector(claimed);


  useEffect(() => {
    dispatch(getPublicCoupons());

  }, [dispatch, cl ])

  const paginate = (i) => {
    setCurrentPage(i)
  }

  return (
    <>
    <BodyContainer>
    <Link to="/dashboard" >
        <NavButton><BiArrowBack/></NavButton>
      </Link>
      <Subhead>Public Coupons</Subhead>
      
      {pc.length > 0? pc.slice(indexOfFirst, indexOfLast).map((i, key) => (
        <CouponCard key={key} coupon={i} />
      ))
      :
      <BarLoader/>
      }
      <PaginationBar perPage={perPage} total={pc.length} currentPage={currentPage} paginate={paginate}/>
    
    </BodyContainer>
    </>
  )
}

export default ViewCoupon