import React from 'react'

const Signup = () => {
  return (
    <div className='w-full bg-gray-100 pt-20 h-screen font-Montserrat'>
        <div className='grid 2xl:grid-cols-2 sm:grid-cols-2 py-8 px-6 justify-center mx-auto items-center mx-auto '>
            <div className='border rounded-md py-16 px-7 mb-8 sm:mb-0 bg-white'>
                <p className='w-full bg-gray-200 rounded-sm pl-2 text-center text-[#059669] font-bold py-1'>BASIC INFO</p>
                <div className='flex flex-col gap-6'>
                    <div className=''>
                        <p className='py-3'>Firstname</p>
                        <input type="text" placeholder='firstname' className='border w-full rounded-md border-[#059669] py-2 px-2'  />
                    </div>
                    <div>
                        <p className='py-3'>Lastname</p>
                        <input type="text" placeholder='lastname' className='border w-full rounded-md border-[#059669] py-2 px-2' />
                    </div>
                </div>

                <div className='flex flex-col gap-6'>
                    <div>
                        <p className='py-3'>Email Address </p>
                        <input type="email" placeholder='eg.kani@gmail.com' className='border w-full rounded-md border-[#059669] py-2 px-2'  />
                    </div>
                    <div>
                        <p className='py-3'>Mobile</p>
                        <input type="text" placeholder='phone no..' className='border w-full rounded-md border-[#059669] py-2 px-2' />
                    </div>
                </div>

                <div>
                    <p className='py-3'>Gender</p>
                    <div className='flex gap-2'>
                        <div>
                            <input  type="checkbox" id="maleCheckbox" value="male" /> 
                            <label  for="maleCheckbox">Male</label>
                        </div>
                   <    div>
                            <input class="form-check-input" type="checkbox" id="femaleCheckbox" value="female" />
                            <label class="form-check-label" for="femaleCheckbox">Female</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="othersCheckbox" value="others" />
                            <label class="form-check-label" for="othersCheckbox">Others</label>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <p className='mt-3'>Change Profile Photo</p>
                    <p>Dimension should be 450 * 450 max: 100kb</p>
                    <div className='flex justify-between py-4 my-2'>
                        <button className='border rounded-md border-[#059669] border-2 px-3 py-2 mt-2 text-[#059669] font-bold'>Browse file</button>
                        <button className='text-white bg-[#059669] rounded-md px-2 py-1'>Save Changes</button>
                    </div>
                    
                </div>

                <div className='flex justify-end py-2'>
                   
                </div>
            </div>
    
            {/* card */}
            <div className='flex flex-col py-16 top-0 rounded-md mx-auto px-6 bg-white items-center justify-center'>
                <div className='w-20 py-5 bg-gray-100 rounded-full flex items-center justify-center font-bold text-4xl'>P</div>
                <p className='font-bold text-2xl text-[#059669] border-b-2 py-4'>Kani Creative</p>
                <p className='py-4'>kanicreativeagency@gmail.com</p>
                <button className='text-white bg-[#059669] rounded-md px-3 py-2'>Buyer</button>
            </div>
        </div>
    </div>
  )
}

export default Signup