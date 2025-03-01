import Link from "next/link";
import '../styles/globals.css'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Main() {

    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scroll down
          setIsVisible(true);
        } else if (currentScrollY < lastScrollY) {
          // Scroll up
          setIsVisible(false);
        }
        setLastScrollY(currentScrollY);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);
  

  useEffect(() => {
    const handleScroll = () => {
        const scrollValue = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        document.body.style.setProperty('--scroll', scrollValue.toString()); 
    };

    window.addEventListener('scroll', handleScroll, false);


    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
      

    const handleScrollToTop = (event) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
         };
    return (
        <div className='flex flex-col  Main-div'>
            <div className="progress"></div>
            <div className='flex-col flex gap-5 w-[100%] justify-center items-center sm:flex-row'>
                <Link href="/post" className='p-5 rounded-tl-xl w-[80%] sm:w-[25%] md:w-[40%] xl:w-[25%] lg-[50%] rounded-br-xl rounded-bl-xl Round border-1 border-[#9ca3af] section-Main'>
                    <section>
                        <div className='flex items-center gap-5'>
                                    <Image 
                            src="/images/magic.png" 
                            alt="Magic Icon" 
                            width={100} 
                            height={100} 
                            className='w-[11%]' 
                        />
                            <h1 className='text-[#fffc] font-bold text-lg'>Create Post</h1>
                        </div>
                        <div className='px-10 py-8 text-[#9ca3af]'>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, rem?</span>
                        </div>
                    </section>
                </Link>
                <section className='p-5 rounded-tl-xl w-[80%] sm:w-[25%] md:w-[40%] xl:w-[25%] lg-[50%] rounded-br-xl rounded-bl-xl Round border-1 border-[#9ca3af] section-Main'>
                    <div className='flex items-center gap-5'>
                          <Image 
                      src="/images/cooperation (1).png"
                      alt="Cooperation Icon" 
                      width={100} 
                      height={100} 
                      className='w-[11%]' 
                  />
                        <h1 className='text-[#fffc] font-bold text-lg'>Business</h1>
                    </div>
                    <div className='px-10 py-8 text-[#9ca3af]'>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, rem?</span>
                    </div>
                </section>
                <Link href="/posts" className="p-5 rounded-tl-xl w-[80%] sm:w-[25%] md:w-[40%] xl:w-[25%] lg-[50%] rounded-br-xl rounded-bl-xl Round border-1 border-[#9ca3af] section-Main">
            <section>
                    <div className='flex items-center gap-5'>
                          <Image 
                      src="/icon/image-svgrepo-com (1).svg"
                      alt="Cooperation Icon" 
                      width={100} 
                      height={100} 
                      className='w-[11%]' 
                  />
                        <h1 className='text-[#fffc] font-bold text-lg'>Posts</h1>
                    </div>
                    <div className='px-10 py-8 text-[#9ca3af]'>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, rem?</span>
                    </div>
                </section>
            </Link>
            </div>
            
            {isVisible && (
                <button
                className="bg-[#161617cc] text-[#9ca3af] py-2 px-4 rounded-full fixed bottom-20 right-4 transition-opacity duration-300"
                onClick={handleScrollToTop}
                style={{ opacity: isVisible ? 1 : 0 }}
                >
                <i className="fas fa-angle-up"></i>
                </button>
            )}            
        <p className="-z-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident omnis ratione deleniti, tempore harum hic dolorem delectus error architecto veritatis expedita minus! Quia vel, veritatis omnis quae delectus aut, assumenda, ab possimus nihil aliquid tenetur porro illum voluptate? Debitis unde saepe autem, voluptates optio iste, adipisci ab eum, fugiat voluptate sapiente similique praesentium expedita vel placeat sequi voluptas quia repellat commodi! Vero unde in nam sit id ea veniam quos eligendi, aspernatur cumque incidunt nihil doloribus, autem quo. Quasi harum labore aspernatur at cum. At neque deserunt harum natus optio sit magnam iure, modi possimus minus, suscipit voluptate voluptas, dolores cum veritatis illo? Vero placeat enim ducimus nam rem temporibus, ex voluptatum, vel fugiat, perferendis nisi tempore illo deserunt ipsa molestiae aspernatur tenetur explicabo in saepe voluptate dolore repudiandae dicta! Veritatis, iure! Doloribus similique quidem commodi provident qui, eum, numquam sed aliquam voluptates veniam atque cupiditate reiciendis dicta culpa quasi optio. Numquam, fuga. Incidunt distinctio voluptatum optio eligendi. Commodi dicta eius reiciendis iure nisi. Recusandae tempore, culpa nam quo molestiae deleniti. Illo nam praesentium voluptate nostrum necessitatibus distinctio quod molestiae perspiciatis saepe vel possimus laboriosam porro culpa sapiente dicta maxime similique, soluta doloremque mollitia? Quae animi illum, mollitia earum dolorum quis, repudiandae nostrum reiciendis at, ratione eius fugit reprehenderit dicta optio. Eaque excepturi consequatur odit accusamus tempore sequi officiis. Ad adipisci nesciunt vel repellat perferendis culpa nisi, deserunt libero fugiat placeat aliquid a enim eveniet ut. Sequi quos quis neque, iure mollitia pariatur, beatae modi tempore voluptatibus aut nam asperiores quisquam? Commodi ut mollitia vel, voluptates minus obcaecati, officiis sequi quasi vitae error non! Hic, magnam sunt? Similique quis assumenda illum optio pariatur, animi voluptatibus soluta veniam. Necessitatibus iure iusto officia, totam odio maxime aperiam cupiditate quidem error dolore libero similique corporis vel. Ullam libero unde placeat quisquam odit ipsum nihil quae voluptatem a tempore, est itaque debitis provident illum? Quibusdam dolor commodi veniam optio! Autem, deleniti libero ratione aspernatur commodi minus error reiciendis neque porro praesentium a, esse vitae, nobis placeat dolor accusantium cumque facilis consequatur unde voluptatem blanditiis dolores laudantium. Tempore ipsam omnis necessitatibus quisquam voluptas incidunt error quidem, adipisci modi minima. Asperiores quidem ad dolorem et maxime sit dolor natus magnam voluptatibus, ullam maiores, sint reiciendis odio, corporis porro nulla fuga itaque explicabo tempore voluptates. Ipsa unde corporis rem sit nemo suscipit in cupiditate maxime nihil a laudantium impedit dolorum placeat at, consectetur facere voluptatem minus blanditiis facilis. Eum quis tempora corporis sapiente odit quo, quia doloremque reprehenderit atque optio enim quasi dignissimos perspiciatis suscipit placeat unde aut adipisci incidunt repellendus nostrum animi itaque. Architecto quibusdam adipisci voluptatibus est commodi! Minima odit doloremque aliquid expedita sapiente ab nesciunt modi. Quaerat eos, natus, laborum harum fugit vitae provident illum atque quia eaque fuga beatae reprehenderit inventore possimus ex. Quae, eum nam? Earum itaque porro ratione magnam sit. Quaerat nihil iste nulla sint animi, atque deleniti aut consequatur, molestias quam, quos quia ipsum similique voluptates! Nostrum consectetur a corrupti incidunt accusamus nisi reprehenderit impedit! Harum deserunt blanditiis doloremque delectus animi reiciendis, eos illo, necessitatibus laborum praesentium dolore eligendi quae ad! Error, deleniti? Excepturi nobis deserunt animi numquam odit possimus, sapiente facilis obcaecati quo blanditiis dolores officia eum fugiat! Iure consectetur perspiciatis dignissimos eos, officiis molestiae dolores molestias sed, quaerat ut quas exercitationem. Possimus aliquid hic iure porro voluptates! Deleniti quasi nulla dolorem expedita, aspernatur dignissimos corrupti necessitatibus nisi, quia ipsum porro quod rem iusto provident vitae perspiciatis! Quaerat architecto autem earum pariatur sint laboriosam perferendis dolore quae magni, iusto, totam eveniet. Obcaecati illum vero quisquam. Incidunt laudantium omnis quisquam explicabo nostrum quaerat harum nobis! Error quis rerum recusandae ratione architecto quos, quam natus assumenda officia et? Illo eaque pariatur, accusamus, magnam iure quidem repellat voluptatum sapiente earum culpa corporis cum qui labore corrupti itaque perferendis nam aspernatur et, atque harum placeat similique accusantium soluta. Obcaecati eos animi laboriosam beatae expedita aut repellendus accusantium id magni error adipisci dolores quas dicta hic suscipit eius, ullam quasi. Adipisci doloremque hic minus sit impedit voluptates, mollitia recusandae magnam. Fugiat voluptas similique facilis animi quas, inventore pariatur eligendi veniam dolor assumenda, eos dolore eaque tenetur vitae ullam! Unde delectus, quam dolor molestias quas dolores a veritatis eaque repellat! Ipsum, fugit quibusdam? Earum amet quasi temporibus ullam animi delectus vero veniam quidem magni corrupti numquam quisquam in odit, nesciunt magnam autem molestiae ducimus quod voluptatem, quo eius repellat. Enim assumenda saepe provident consequuntur commodi ullam velit quisquam iure totam inventore sequi nisi delectus, neque quidem cum recusandae optio non natus quo ducimus ea dolorem eveniet. Nulla commodi voluptates dicta maiores maxime ullam tempora aperiam quos quisquam. Id delectus, dolor velit cumque explicabo minus pariatur! Qui maiores iure quaerat assumenda tempora repellendus fugiat. Ipsa quia quod earum laboriosam quisquam asperiores voluptatibus iste molestiae? Magnam placeat atque non asperiores veritatis, repellat perspiciatis blanditiis. Aperiam est, ipsa magni, in voluptas cupiditate ducimus ullam officiis, sit accusamus eos. Ipsum reprehenderit, sunt dicta nemo saepe minus facere ea deleniti voluptates dolores consequuntur optio voluptas doloremque sequi accusamus sapiente placeat aut quia sint velit dolore, tempore possimus, iste totam. Perferendis voluptatum nisi temporibus. Et rem ut nihil dignissimos perspiciatis aut ipsa asperiores! Quasi veritatis delectus suscipit numquam quaerat eius cum praesentium sunt dicta nam? Repellendus delectus explicabo doloribus laboriosam asperiores sit tempore aliquid quis quidem autem? Laboriosam harum, at ea omnis iure eveniet sed facere quis delectus similique atque esse ut nesciunt minus adipisci quo nam obcaecati? Quae, nostrum et adipisci, consectetur ratione quasi laboriosam possimus provident nam tenetur nemo aliquam necessitatibus obcaecati officiis accusantium quas! Reprehenderit accusantium adipisci earum, debitis consequuntur aliquam quae molestiae ratione, provident, alias aperiam quos enim soluta numquam reiciendis odit quod vitae. Nemo asperiores est vitae cum ipsa voluptatum numquam, maxime repudiandae fugit consectetur nam ea sapiente officiis fuga molestias sunt recusandae quaerat sit earum at distinctio dolore. Ab repudiandae qui ut quia tempora soluta ad in placeat officiis! Aliquam illo expedita explicabo maxime, quas quibusdam odio sunt voluptate autem nobis suscipit exercitationem voluptatum, aut nesciunt ea inventore at? Perferendis enim porro quisquam sed magnam?</p>
        </div>

    )
}
