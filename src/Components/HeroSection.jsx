
// تأكد إنك حاطط الصور دي في فولدر public بالأسماء دي بالظبط
import modelImg from '/image 2.png'; 
import patternBg from '/ad.png'; // الصورة اللي فيها الأيقونات الصغيرة الرمادي

const HeroSection = () => {
  return (
    <div 
      className="container-fluid" 
      style={{ 
        backgroundColor: '#FF8C00', // اللون الأورنج القوي بتاع Figma
        backgroundImage: `url(${patternBg})`, // الخلفية اللي فيها الأيقونات
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '400px' // ارتفاع المستطيل الأورنج
      }}
    >
      <div className="container h-100 position-relative">
        <div className="row h-100 align-items-center">
          
          {/* الجزء اللي على الشمال: صورة الولد */}
          <div className="col-5 h-100 position-relative d-flex align-items-end">
            <img 
              src={modelImg} 
              alt="Fashion Model" 
              className="img-fluid" 
              style={{ 
                height: '110%', // عشان تبقى طالعة بره الإطار الأورنج شوية
                objectFit: 'contain',
                position: 'absolute',
                bottom: '0',
                left: '0'
              }}
            />
          </div>

        
        <div className="col-7 text-white">
            <h1 
              className="fw-bold text-wrap text-start" 
             
            >
              Get <span className="fw-bolder">50% Off</span> on<br />
              Selected categories<br />
              Products
            </h1>
            
          
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
