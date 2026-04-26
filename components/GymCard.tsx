'use client'

import { useState } from 'react'

type Gym = {
  name: string
  rating: number
  reviewCount?: number
  price: string
  pricePerSession?: string
  totalCost?: string
  enrollmentFee?: string
  sessionTime?: string
  features: string[]
  description: string
  access: string
  address?: string
  popularPlan?: {
    name: string
    description: string
    price: string
  }
  options?: string[]
  basicInfo?: {
    hours: string
    closed: string
    facilities: string[]
  }
}

type GymCardProps = {
  gym: Gym
  index: number
}

export function GymCard({ gym, index }: GymCardProps) {
  const [activeTab, setActiveTab] = useState<'plan' | 'cost' | 'basic' | 'map'>('plan')

  const rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : 'rank-default'

  return (
    <div id={`gym-${index + 1}`} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow scroll-mt-24">
      <div className="p-5 md:p-6">
        <div className="flex items-start gap-3 mb-4">
          <span className={`${rankClass} text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0`}>
            {index + 1}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-site-text">{gym.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-500">★</span>
              <span className="font-bold text-sm">{gym.rating}</span>
              {gym.reviewCount && <span className="text-site-muted text-xs">({gym.reviewCount}件)</span>}
            </div>
          </div>
          {gym.pricePerSession && (
            <div className="bg-accent-50 border border-accent-200 rounded-lg px-3 py-2 text-center shrink-0">
              <div className="text-[10px] text-accent-600 font-bold">1回あたり</div>
              <div className="text-accent-500 font-bold text-lg leading-tight">{gym.pricePerSession}</div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {gym.features.map((feature, i) => (
            <span key={i} className="bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
              {feature}
            </span>
          ))}
        </div>

        <p className="text-site-muted text-sm leading-relaxed mb-4">{gym.description}</p>

        {/* Cost Summary Bar */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4 grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-[10px] text-site-muted">入会金</div>
            <div className="text-sm font-bold text-site-text">{gym.enrollmentFee || '-'}</div>
          </div>
          <div>
            <div className="text-[10px] text-site-muted">月額/総額</div>
            <div className="text-sm font-bold text-primary-600">{gym.price}</div>
          </div>
          <div>
            <div className="text-[10px] text-site-muted">1回あたり</div>
            <div className="text-sm font-bold text-accent-500">{gym.pricePerSession || '-'}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-3 overflow-x-auto">
          {(['plan', 'cost', 'basic', 'map'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-md transition-colors ${
                activeTab === tab
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-site-muted hover:bg-gray-200'
              }`}
            >
              {tab === 'plan' ? '人気プラン' : tab === 'cost' ? 'コスト詳細' : tab === 'basic' ? '基本情報' : '地図'}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-[140px]">
          {activeTab === 'plan' && (
            <div>
              <h4 className="font-bold text-site-text mb-2">{gym.popularPlan?.name || '人気プラン'}</h4>
              <p className="text-site-muted text-sm mb-2">{gym.popularPlan?.description || `${gym.name}で一番人気のプラン。`}</p>
              <div className="space-y-1.5">
                <div className="flex items-center text-sm">
                  <span className="text-site-muted w-20">料金：</span>
                  <span className="font-bold text-primary-600">{gym.popularPlan?.price || gym.price}</span>
                </div>
                {gym.sessionTime && (
                  <div className="flex items-center text-sm">
                    <span className="text-site-muted w-20">時間：</span>
                    <span className="font-bold">{gym.sessionTime}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'cost' && (
            <div>
              <h4 className="font-bold text-site-text mb-2">コスト詳細</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-site-muted">入会金</span>
                  <span className="font-bold">{gym.enrollmentFee || '要確認'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-site-muted">セッション料金</span>
                  <span className="font-bold">{gym.price}</span>
                </div>
                {gym.totalCost && (
                  <div className="flex justify-between py-1 bg-primary-50 rounded px-2">
                    <span className="text-primary-700 font-medium">総額目安（2ヶ月）</span>
                    <span className="font-bold text-primary-600">{gym.totalCost}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'basic' && (
            <div>
              <h4 className="font-bold text-site-text mb-2">基本情報</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-site-muted">営業時間：</span>
                  <span className="ml-1">{gym.basicInfo?.hours || '要確認'}</span>
                </div>
                <div>
                  <span className="text-site-muted">定休日：</span>
                  <span className="ml-1">{gym.basicInfo?.closed || '要確認'}</span>
                </div>
                <div>
                  <span className="text-site-muted">アクセス：</span>
                  <span className="ml-1">{gym.access}</span>
                </div>
                {gym.basicInfo?.facilities && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {gym.basicInfo.facilities.map((f, i) => (
                      <span key={i} className="bg-white text-site-muted px-2 py-0.5 rounded text-xs border border-gray-200">{f}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'map' && (
            <div>
              <h4 className="font-bold text-site-text mb-2">アクセス</h4>
              <p className="text-sm text-site-muted mb-2">{gym.access}</p>
              {gym.address && <p className="text-sm text-site-muted mb-3">{gym.address}</p>}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-secondary-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary-700 transition"
              >
                Google Mapで見る
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
