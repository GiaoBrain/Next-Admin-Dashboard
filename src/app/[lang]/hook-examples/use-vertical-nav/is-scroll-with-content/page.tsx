'use client'

// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

const IsScrollWithContent = () => {
  // Hooks
  const { isScrollWithContent, updateVerticalNavState } = useVerticalNav()

  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px' scrollWithContent={isScrollWithContent}>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          <SubMenu label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <SubMenu label='Menu Level'>
            <MenuItem>Menu Level 2.1</MenuItem>
            <SubMenu label='Menu Level 2.2'>
              <MenuItem>Menu Level 3.1</MenuItem>
              <MenuItem>Menu Level 3.2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </VerticalNav>
      <main className='p-4 flex-grow'>
        <div className='flex justify-between'>
          <FormControlLabel
            label='Scroll With Content'
            control={
              <Checkbox onChange={() => updateVerticalNavState({ isScrollWithContent: !isScrollWithContent })} />
            }
          />
          <p>{`Status : ${isScrollWithContent}`}</p>
        </div>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex culpa nihil fugit inventore corporis
          at! Magnam odio quidem dolore, accusamus dolorem iste nihil odit facilis? Porro laborum ipsam harum
          perferendis non, neque impedit illo sunt amet voluptatibus est voluptatem, error sapiente vel aut
          necessitatibus placeat totam. Nobis dolorum soluta accusamus vitae. Excepturi, autem repellat placeat
          explicabo dolore ut maxime! Facere ducimus incidunt molestiae, illum ipsa beatae atque vero, ipsam neque
          aliquid est quidem perspiciatis vitae cum labore nostrum dicta laudantium necessitatibus fugiat soluta!
          Recusandae cum laboriosam eum labore doloribus soluta perferendis repellat, deleniti esse aut. Nisi expedita
          soluta amet rerum tempora, id voluptatum recusandae repudiandae placeat. Adipisci temporibus tempora iure,
          dicta hic error cumque aut perferendis exercitationem! Debitis odio pariatur sint voluptate, adipisci deleniti
          doloremque reprehenderit ab, possimus id neque. Aliquam voluptatibus cumque voluptate at natus ducimus quam
          saepe deleniti a, animi laborum quidem vero tenetur temporibus nam dolorum ad magnam inventore, quod quaerat
          error dolorem odio hic aspernatur! Nostrum debitis repudiandae delectus, temporibus, commodi illo quaerat in
          maiores laboriosam libero maxime sit dicta consectetur natus nam itaque. Assumenda inventore perferendis
          atque, laborum quae harum culpa nam suscipit ducimus quia! Iure tempore explicabo autem? Possimus voluptas,
          voluptate exercitationem sed maxime animi, iste nesciunt magnam placeat obcaecati pariatur deleniti temporibus
          quae necessitatibus vel aliquam autem magni? Saepe fugit nobis libero nam ratione eos delectus consequatur
          facilis tempora doloribus doloremque vero debitis nisi explicabo omnis, commodi in, quasi voluptatibus
          excepturi deleniti? Quasi repellat repellendus sapiente sed illum iste consequuntur, maxime culpa, sint
          accusamus similique deserunt eius eum ab quibusdam? Magni nihil officiis modi vero? Fugiat consequuntur
          repellat exercitationem numquam nulla unde rerum iste tenetur molestias maxime iure modi illum, quos laborum
          facilis repellendus ut voluptatem ab, ipsum earum quo, aliquid deserunt quia minus! Maiores ex neque
          reiciendis nulla voluptates magni fugiat officia temporibus commodi, dignissimos quaerat perspiciatis quas
          quibusdam reprehenderit maxime quam omnis consequatur doloribus facere! Rem illo repellendus a animi non qui
          ab in error earum quisquam facere laboriosam, eligendi molestiae consequuntur. Minima, officiis iusto vitae ex
          praesentium aspernatur dolore quod eos doloremque soluta veniam. Sint voluptatem vel dolor. In, quisquam omnis
          dignissimos libero eveniet explicabo blanditiis dolores beatae? Velit quisquam nam obcaecati, fugit eligendi
          nemo amet sit, quas, deleniti iusto reprehenderit aperiam ea dicta reiciendis! Dicta voluptatibus perspiciatis
          nisi molestias quasi tempore omnis fuga sint deleniti cumque? Repellat excepturi, tenetur quam quas minus
          illo. Aspernatur impedit ut quis similique error, explicabo optio obcaecati illo commodi, delectus ipsam!
          Magni nobis quos placeat tempore suscipit nostrum aliquid fugit facilis laboriosam quasi itaque minima nihil
          eaque corrupti accusamus facere aspernatur, necessitatibus esse, harum soluta. Fugiat, sit laboriosam?
          Dignissimos praesentium minima repellendus molestiae, laboriosam labore in optio porro fugiat quo veritatis
          non, nobis mollitia qui illo. Possimus iste soluta ullam impedit reiciendis dolorem quam assumenda cupiditate.
          Accusamus, sapiente. Distinctio sapiente accusantium dolorum molestiae rerum eligendi, culpa assumenda,
          deserunt quod aliquid, consequatur labore possimus laudantium quas architecto. Suscipit deserunt accusantium
          eaque facere reprehenderit fugiat sint distinctio aperiam expedita asperiores harum, optio magni quasi veniam!
        </p>
      </main>
    </div>
  )
}

export default IsScrollWithContent
