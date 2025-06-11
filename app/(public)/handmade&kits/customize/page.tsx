"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DraggableDecorationItem } from '@/components/customize/DraggableDecorationItem';
import { ProductPreview } from '@/components/customize/ProductPreview';
import { CustomizeOptions } from '@/components/customize/CustomizeOptions';







// 产品类型定义
const productCategories = {
  hairAccessories: ['发卡', '发箍', '头绳'],
  jewelry: ['耳饰', '项链'],
  decorations: ['徽章', '挂件'],
  homeDecor: ['毯子', '抱枕', '灯罩', '帘子']
};

// 发卡自定义选项
const hairClipOptions = {
  baseShapes: ['圆形', '方形', '心形', '蝴蝶形'],
  baseColors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
  laceStyles: ['花边1', '花边2', '花边3'],
  laceColors: ['#FFFFFF', '#000000', '#808080'],
  decorations: [
    { id: 1, name: '玫瑰花', price: 2 },
    { id: 2, name: '立体玫瑰', price: 3 },
    { id: 3, name: '泡芙花', price: 2 },
    { id: 4, name: '柠檬片', price: 1.5 },
    { id: 5, name: '玫瑰花束', price: 4 },
    { id: 6, name: '刺绣兔子', price: 3.5 }
  ]
};

export default function CustomizePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [customization, setCustomization] = useState<{
    baseShape: string;
    baseColor: string;
    laceStyle: string;
    laceColor: string;
    decorations: { id: number; name: string; price: number }[];
  }>({
    baseShape: '',
    baseColor: '',
    laceStyle: '',
    laceColor: '',
    decorations: []
  });
  const [purchaseOption, setPurchaseOption] = useState('');
  
  // 计算总价格
  const calculatePrice = () => {
    let basePrice = 0;
    switch(purchaseOption) {
      case 'pdf':
        return 5;
      case 'diyKit':
        basePrice = 15;
        break;
      case 'finished':
        basePrice = 25;
        break;
    }
    return basePrice + customization.decorations.reduce((sum, dec) => 
      sum + (hairClipOptions.decorations.find(d => d.id === dec.id)?.price ?? 0), 0
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 步骤指示器 */}
        <div className="flex justify-center mb-8">
          {[1,2,3,4].map(step => (
            <div 
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 cursor-pointer
                ${currentStep === step ? 'bg-[#3b3530] text-white' : 'bg-gray-200'}`}
              onClick={() => step < 4 && setCurrentStep(step)}
            >
              {step}
            </div>
          ))}
        </div>

        {/* 步骤1：选择产品类型 */}
        {currentStep === 1 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(productCategories).map(([category, products]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-content font-medium">{category}</h3>
                {products.map(product => (
                  <button
                    key={product}
                    className={`w-full p-4 border rounded-md font-content
                      ${selectedProduct === product ? 'border-[#3b3530]' : 'border-gray-200'}`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedProduct(product);
                      setCurrentStep(2);
                    }}
                  >
                    {product}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* 步骤2：自定义选项 */}
        {currentStep === 2 && (
          <DndProvider backend={HTML5Backend}>
            <div className="grid grid-cols-12 gap-8">
              {/* 预览区域 */}
              <div className="col-span-8">
                <ProductPreview 
                  customization={customization}
                  onDecorationMove={(decorations) => 
                    setCustomization({...customization, decorations})}
                />
              </div>
              
              {/* 选项面板 */}
              <div className="col-span-4">
                <CustomizeOptions 
                  options={hairClipOptions}
                  customization={customization}
                  onChange={setCustomization}
                />
              </div>
            </div>
          </DndProvider>
        )}

        {/* 步骤3：购买选项 */}
        {currentStep === 3 && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <ProductPreview customization={customization} readonly />
            </div>
            
            <div className="space-y-4">
              {['pdf', 'diyKit', 'finished'].map(option => (
                <button
                  key={option}
                  className={`w-full p-4 border rounded-md font-content
                    ${purchaseOption === option ? 'border-[#3b3530]' : 'border-gray-200'}`}
                  onClick={() => setPurchaseOption(option)}
                >
                  {option === 'pdf' ? 'PDF图纸 - £5' :
                   option === 'diyKit' ? `DIY套件 - £${calculatePrice()}` :
                   `成品 - £${calculatePrice()}`}
                </button>
              ))}
              
              {purchaseOption && (
                <button 
                  className="w-full p-4 bg-[#3b3530] text-white rounded-md font-content"
                  onClick={() => setCurrentStep(4)}
                >
                  加入购物车
                </button>
              )}
            </div>
          </div>
        )}

        {/* 步骤4：完成 */}
        {currentStep === 4 && (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-content">自定义成功!</h2>
            <p className="font-content">您的商品已添加到购物车</p>
            <Link 
              href="/handmade&kits/customize"
              className="inline-block p-4 bg-[#3b3530] text-white rounded-md font-content"
            >
              继续自定义
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
