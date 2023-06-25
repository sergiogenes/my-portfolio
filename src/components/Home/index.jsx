import { useEffect, useState } from 'react'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => setLetterClass('text-animate-hover'), 4000)
  }, [])

  return (
    <section id='welcome-section'>
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={'Hola, soy Sergio Genes'.split('')}
          idx={20}
        />
      </h1>
      <p>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={'full stack developer'.split('')}
          idx={25}
        />
      </p>
      <div className='svg-container'>
        <svg
          width='1154'
          height='1247'
          viewBox='0 0 1154 1247'
          fill='black'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='slg-logo'>
            <g id='Fondo-1'>
              <path
                id='Vector'
                d='M690.667 1.46665C647.733 4.93332 603.067 14.5333 566.667 28.1333C532.8 40.9333 489.733 65.4667 462 88C430.667 113.2 406.267 142.133 389.467 173.467C382.933 185.733 373.333 208.8 373.333 212.267C373.333 213.2 376.133 215.467 379.467 217.333C395.733 225.867 416 245.333 425.067 260.933C434.4 277.067 441.333 299.2 441.333 312.8V317.733L457.067 302.533C490.267 270.267 531.333 244.267 577.2 226.533L591.867 220.933L592.667 212.133C595.067 183.333 600.8 161.067 610.133 144.133C616.533 132.4 621.067 126.4 631.067 116.133C660.267 86.4 703.333 72.5333 756.667 76.1333C800.8 79.0667 832.667 97.0667 849.2 128C851.467 132.133 854.8 140.8 856.667 147.333C863.067 169.067 862.533 205.867 855.333 229.733L853.467 236.133L865.733 229.467C900.133 210.933 943.733 198.267 984.267 195.2L995.867 194.267L995.333 188.133C994.933 184.8 994.4 177.333 994 171.733C992.533 149.733 986.133 126.933 975.867 106.667C944.8 46 875.867 9.59999 776.667 1.33332C758 -0.133346 710.8 -0.133346 690.667 1.46665Z'
              />
            </g>
            <g id='Letra-S'>
              <path
                id='Vector_2'
                d='M252.667 234.8C178.267 242.4 119.867 282.533 102.933 337.6C93.6 367.733 96.6666 397.867 112 428.667C123.733 452.133 130.533 460.8 187.067 524.4C195.067 533.333 207.733 548.8 215.2 558.667C237.333 588.133 245.867 604.533 252.933 631.733C256.267 644.8 256.667 648 256.533 669.333C256.4 696.533 254.4 706.533 245.067 725.333C238.133 739.333 222.533 755.733 209.733 762.4C192.533 771.467 165.467 774.667 145.6 770C127.333 765.733 109.467 752.267 100.933 736.4C92.6666 720.933 89.6 695.067 94 678C101.867 648.267 131.733 627.467 171.6 624.4C184.4 623.467 184.133 623.867 180 610.133C176.667 599.733 166.8 588 156.267 582.267C135.867 571.2 99.6 570.267 74.6666 580.267C40.4 593.867 14.8 624.267 4.53329 663.333C1.33329 675.2 0.933289 679.067 0.933289 699.333C0.933289 723.467 2.26662 732.667 8.39996 749.467C22.1333 787.6 56.2666 815.467 103.467 827.2C160.4 841.467 230.133 834.4 280.4 809.2C334.933 782 370.133 736.267 380.933 678.667C384.533 659.067 384.133 617.333 380.133 598.667C370 551.067 348.667 518.4 297.333 471.6C235.733 415.467 219.333 395.2 212 366C208.533 352.533 208.267 330.533 211.333 318.533C218.667 290.533 238.8 274.133 270.4 270.533C291.867 268.133 311.6 273.067 323.067 283.867C341.333 300.933 343.733 330.267 329.2 360C324.8 368.8 321.467 373.467 313.867 380.933L304 390.4L308.933 394.8C318 402.667 324.267 404.667 340 404.533C351.067 404.533 355.467 403.867 361.333 401.6C388.4 390.8 404.133 360.4 402.4 322.133C400.267 275.333 370.4 246 315.733 236.667C300.667 234.133 268.133 233.2 252.667 234.8Z'
              />
            </g>
            <g id='Letra-LG'>
              <path
                id='Vector_3'
                d='M984.8 234.667C907.467 241.6 842 279.2 794.533 343.867C760 390.8 738.4 452.267 734.8 513.733C731.467 571.333 741.467 626.4 761.6 660.667C788.533 706.4 829.067 729.2 890 732.8C917.333 734.267 957.467 724.8 988 709.333C992.4 707.067 996 706 996 706.8C996 709.6 966.533 840.8 962 858.267C955.333 883.733 946.133 906.4 938.4 915.867L935.6 919.333L936.667 914C938.4 904.133 939.867 892.8 939.333 892.267C939.067 892 934.133 893.333 928.267 895.2C905.733 902.267 881.467 904.933 859.333 902.667C838 900.533 838.933 900.933 838 892.667C836.8 883.733 840 867.467 844.667 857.867C848.933 849.2 859.6 838.267 868 834C887.867 823.867 911.467 827.2 931.867 842.667C935.733 845.733 939.2 848 939.467 847.733C939.733 847.467 940.933 841.467 942.133 834.667C946 812 942.933 795.733 932.533 784.133C920.933 771.333 904.667 766.4 872.667 766.133C849.6 766 843.067 767.2 826.667 774.933C817.333 779.467 813.333 782.4 803.867 791.867C794.133 801.733 791.333 805.6 785.467 817.467C777.6 833.2 773.333 850.4 773.333 866.267C773.333 871.6 772.8 876 772.133 876C769.6 876 750.267 866.4 710.667 845.6C666.133 822 642.667 811.2 624.933 806.133C618.8 804.4 613.867 802.133 613.6 801.2C613.467 800.133 639.733 676 672.133 525.333C704.4 374.667 731.2 249.467 731.6 247.2L732.267 242.933L716.533 241.867C636.667 236.8 540.133 274.267 481.6 333.2C444.4 370.8 425.333 413.733 428.533 452.933C432 495.067 453.867 516 497.2 518.267C510.533 519.067 511.067 518.933 510 516.533C502.133 497.467 499.2 479.2 500.533 456C502.267 424.133 508.4 400.133 520.8 376C533.6 350.933 551.733 330.533 574.667 315.333C588.4 306.133 607.467 296.267 608.667 297.6C609.2 298 583.733 418.667 552.133 565.6C520.533 712.533 494.667 833.333 494.667 834.133C494.667 835.067 501.2 835.867 513.733 836.4C570.267 838.533 610.4 858 694.667 924.4C761.067 976.8 790.8 996.133 820 1005.87C860.533 1019.33 887.333 1013.33 907.467 986.133L913.733 977.733L927.2 975.333C944.533 972.4 961.6 966.8 976.667 959.2C1023.6 935.733 1055.07 887.2 1075.33 806.667C1078.8 792.8 1144 495.2 1144 493.067C1144 492.533 1121.47 492 1094 492C1066.53 492 1044 492.133 1044 492.4C1044 493.867 1011.73 634.8 1010.53 638.267C1007.33 648.267 984.667 663.2 967.333 666.8C955.6 669.2 933.067 668.933 922.667 666.267C884.667 656.4 860.667 621.067 854.8 566.4C848.667 510.667 863.867 439.2 893.6 384C926.8 322.133 961.333 287.067 1002 273.867C1015.07 269.6 1033.73 268.933 1045.33 272.4C1065.2 278.267 1077.87 294.667 1080.53 318.133C1083.2 340.533 1069.07 375.333 1052.93 386.267L1046.8 390.4L1051.33 393.867C1064.53 404 1079.73 408.667 1099.33 408.533C1117.73 408.533 1126.27 405.6 1135.87 396C1148.93 382.933 1153.87 367.067 1153.87 338.667C1153.87 321.333 1153.47 318.133 1150.27 308.667C1137.87 271.2 1103.33 246 1052.4 237.333C1034.67 234.267 1003.2 233.067 984.8 234.667Z'
              />
            </g>
            <g id='Fondo-2'>
              <path
                id='Vector_4'
                d='M679.867 676.933L661.733 761.733L665.867 771.467C669.867 780.933 670.133 781.2 678 784.667C682.4 786.533 698.533 794.667 713.867 802.667C740.8 816.8 743.867 817.867 744 812.933C744 810.667 754.8 790.267 760 782.667C766.933 772.4 779.867 758.667 788.267 752.533L794.8 747.733L787.067 743.067C760.667 727.067 735.6 698.533 720.667 667.467C711.2 647.467 706 630.4 698.933 596.4C698.267 593.067 693.6 612.4 679.867 676.933Z'
              />
            </g>
            <g id='Fondo-3'>
              <path
                id='Vector_5'
                d='M415.333 705.6C415.067 706.533 413.2 712.133 411.333 718C382.667 805.733 295.333 866.4 188 873.067L172.667 874L169.6 885.333C158.8 926.4 156.533 980.667 164 1024.8C175.867 1094.93 212.4 1150.13 273.333 1189.73C331.733 1227.6 408.533 1246.67 502.533 1246.67C615.2 1246.67 709.333 1220.67 788 1168C819.067 1147.07 855.733 1114 876.533 1088C885.067 1077.33 901.467 1053.33 907.6 1042.4L910.4 1037.6L901.467 1042.13C896.533 1044.67 887.467 1048 881.333 1049.47C871.467 1052 867.6 1052.27 852 1051.6C808.267 1049.73 774.133 1034 710.133 986.133C697.867 976.933 687.2 969.733 686.533 970.133C685.867 970.533 685.333 971.867 685.333 973.067C685.333 974.267 682.933 982.267 680.133 990.8C656.8 1059.87 605.6 1104.8 538 1115.33C517.733 1118.53 479.2 1117.47 462.667 1113.47C434.933 1106.53 415.067 1096 396.4 1078.13C374 1056.93 359.733 1030.8 353.467 999.067C345.867 961.067 349.6 926.667 364.533 896.667C379.733 866.267 405.6 843.467 443.067 827.467L456.667 821.733L467.6 771.2C473.6 743.333 478.533 720.533 478.667 720.4C478.667 720.267 474 718.4 468.4 716.267C456 711.467 439.467 707.067 429.333 706C425.333 705.6 420.667 704.933 418.933 704.533C417.2 704.133 415.733 704.667 415.333 705.6Z'
              />
            </g>
          </g>
        </svg>
      </div>
    </section>
  )
}

export default Home
