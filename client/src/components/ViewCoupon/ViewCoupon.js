import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {  coupons, getPublicCoupons, claimed } from '../../redux/slice/couponSlice';
import {Link} from 'react-router-dom';
import { Button } from '../Reusable/Reusable';
import CouponCard from '../CouponCard/CouponCard';
import PaginationBar from '../PaginationBar/PaginationBar';

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
    <div>
    <br/>
    <div>ViewCoupon</div>
    <Link to="/dashboard" >
        <Button>Back</Button>
      </Link>
    <div>{pc.length > 0? pc.slice(indexOfFirst, indexOfLast).map((i, key) => (
      <CouponCard key={key} coupon={i} />
    ))
    :
    <p>Loading</p>
    }</div>
    <PaginationBar perPage={perPage} total={pc.length} paginate={paginate}/>
    </div>
  )
}

export default ViewCoupon