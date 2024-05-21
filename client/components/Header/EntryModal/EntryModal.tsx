'use client'

const EntryModal = () => {
  return (
    <div className='modal-box'>
      <div role='tablist' className='tabs tabs-bordered'>
        <input
          type='radio'
          name='my_tabs_1'
          role='tab'
          className='tab'
          aria-label='Tab 1'
          defaultChecked
        />
        <div role='tabpanel' className='tab-content col-span-2'>
          Tab content 1 sdfsfsf sdfds sf sf sdf sdf ds dfrdgdgfdg dfgfd gfdg dfg fdg fdgf d sfsfsefse 
        </div>

        <input
          type='radio'
          name='my_tabs_1'
          role='tab'
          className='tab'
          aria-label='Tab 2'
        />
        <div role='tabpanel' className='tab-content col-span-2'>
          Tab content 2
        </div>
      </div>

      <div className='modal-action'>
        <form method='dialog'>
          <button className='btn'>Close</button>
        </form>
      </div>
    </div>
  )
}

export default EntryModal
