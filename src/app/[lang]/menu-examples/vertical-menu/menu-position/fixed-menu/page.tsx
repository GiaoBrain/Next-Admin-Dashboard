'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

const FixedMenu = () => {
  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px' scrollWithContent={false}>
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
        <h4>Fixed Menu</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quibusdam quos magni ducimus sed tempore aliquid
          vel ipsa rerum, aliquam fugit quas. Deserunt neque, nemo harum, saepe repudiandae eveniet ea id unde quae
          officiis corporis consectetur suscipit! Velit obcaecati ipsam, cupiditate magni culpa cumque sequi incidunt
          sed rem, sit accusamus iste esse doloribus voluptates tempore nostrum eveniet nihil ipsa amet, veniam
          molestias facilis! Harum rem doloremque sapiente velit, sunt nostrum? Magni, id ducimus. Omnis ea a
          repellendus ab autem. Earum consequatur illum reiciendis beatae reprehenderit explicabo, veritatis omnis,
          pariatur cumque nulla nesciunt totam facere esse animi adipisci repellendus modi ipsam ad saepe dolorem ea
          nobis sed molestiae sequi? Minus dolor numquam autem labore, praesentium odit nobis, tenetur illo maiores ab
          nostrum eum quisquam quo! Omnis sed odit hic quasi, minus delectus qui excepturi numquam nulla enim explicabo,
          quos voluptate. Eligendi assumenda quo soluta vel adipisci fugit incidunt voluptas, beatae rerum hic fuga.
          Velit pariatur cum laborum maiores voluptatum ullam. Necessitatibus molestiae eum nihil, esse doloribus iste
          voluptatibus excepturi non minus enim magnam saepe pariatur illum fuga recusandae odio voluptatem sit
          voluptates deserunt molestias. Esse nesciunt quibusdam eos dignissimos impedit iusto reprehenderit numquam
          libero velit cumque. Magni quia eos assumenda et temporibus labore, inventore soluta deleniti rem ad vel
          provident, reprehenderit odio ut magnam fugit, minima quis ab dignissimos non ipsa corrupti? Fugit porro
          aspernatur ipsum ad nostrum nam eligendi, eos distinctio maxime expedita at tenetur totam molestias cumque et
          quasi ea cupiditate id. Aspernatur neque veniam illo, quisquam suscipit corporis harum, rerum consequuntur
          beatae id obcaecati doloribus soluta repellat eligendi modi mollitia ipsa impedit. Hic ullam cumque porro
          maiores ut a sapiente, magni quibusdam consequuntur dolore rem excepturi dolores voluptatibus quas tempora
          architecto repellendus asperiores laboriosam. Eum, qui. Cupiditate ipsam, molestiae vitae, ipsa cumque tempora
          eos asperiores nisi aliquam fugiat, soluta quas? Magnam dolores quia reprehenderit voluptatum sequi adipisci
          minus dolor fuga veritatis hic quod aperiam aut ad odio sint libero neque fugit, iste dicta. Corporis sunt
          facilis perferendis ex exercitationem expedita, impedit molestias facere adipisci officia iste velit
          doloremque. Vel praesentium facere nisi facilis cum aliquid non consequuntur beatae harum possimus quaerat,
          architecto numquam natus accusamus itaque minus dicta? Quae voluptates laborum eos eaque voluptatibus quas
          laudantium blanditiis, consequatur nesciunt magnam maxime est dolores vel debitis consequuntur ullam quia.
          Sint nemo maiores, dolore odio excepturi aliquid. Est architecto rem doloribus, ratione nemo molestias
          inventore delectus necessitatibus alias aspernatur quisquam, placeat aliquam. Culpa velit est vel, saepe iste
          neque quos nulla, itaque explicabo inventore fugiat. Porro ex maxime corrupti optio illum laborum dolorem
          deleniti saepe nam, beatae necessitatibus soluta unde magnam laudantium aspernatur veniam molestias recusandae
          ad totam sunt aperiam sint. Atque, excepturi. Nobis sequi quia corporis possimus quis obcaecati vel alias
          dolorum dolor, soluta velit est quo. Porro, obcaecati suscipit, quia maiores voluptas facere voluptatum atque
          quidem itaque molestias ratione aliquam! Atque alias ad doloremque possimus architecto, labore porro eum autem
          nostrum ab quod consectetur corrupti et explicabo, vel, dolorem tempore hic qui a error magnam dolore! Esse,
          maxime.
        </p>
      </main>
    </div>
  )
}

export default FixedMenu
