import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Video, Clapperboard, ChevronRight, Globe, MapPin, Briefcase } from 'lucide-react';
import { auditReport, videoScripts, visualGuides } from './data/campaignData';

type Tab = 'audit' | 'scripts' | 'guides';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('audit');

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:px-8">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center border-b border-optiline-gold/20 pb-8"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-2">
            OPTILINE
          </h1>
          <p className="text-optiline-gold/80 font-mono text-sm tracking-widest uppercase">
            Proprietary Engineering Standards & Premium Agency Expertise
          </p>
        </div>
        <div className="mt-6 md:mt-0 text-right">
          <p className="text-sm text-gray-400 font-mono tracking-tight">CAMPAIGN TARGET: 6 GLOBAL SMEs</p>
          <p className="text-sm text-gray-400 font-mono tracking-tight mt-1">STATUS: DEPLOYMENT READY</p>
        </div>
      </motion.header>

      {/* Tabs */}
      <div className="w-full max-w-7xl mb-10 flex flex-wrap gap-4 border-b border-gray-800 pb-px">
        <TabButton 
          active={activeTab === 'audit'} 
          onClick={() => setActiveTab('audit')}
          icon={<FileText size={18} />}
          label="Executive Audit Report"
        />
        <TabButton 
          active={activeTab === 'scripts'} 
          onClick={() => setActiveTab('scripts')}
          icon={<Video size={18} />}
          label="Video Scripts"
        />
        <TabButton 
          active={activeTab === 'guides'} 
          onClick={() => setActiveTab('guides')}
          icon={<Clapperboard size={18} />}
          label="Visual Sync Guides"
        />
      </div>

      {/* Content Area */}
      <div className="w-full max-w-7xl">
        <AnimatePresence mode="wait">
          {activeTab === 'audit' && (
            <motion.div
              key="audit"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {auditReport.map((report, idx) => (
                <div key={idx} className="bg-optiline-gray border border-gray-800 hover:border-optiline-gold/50 transition-colors p-6 rounded-lg flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-display font-semibold">{report.company}</h3>
                    <span className="bg-optiline-gold/10 text-optiline-gold text-xs px-2 py-1 rounded-full font-mono">
                      {report.niche.split(' ')[0]}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Briefcase size={14} className="text-optiline-gold" />
                      <span>{report.niche}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-optiline-gold" />
                      <span>{report.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe size={14} className="text-optiline-gold" />
                      <a href={`https://${report.url}`} target="_blank" rel="noopener noreferrer" className="hover:text-optiline-gold transition-colors underline decoration-gray-700 underline-offset-4 pointer-events-auto">
                        {report.url}
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4 text-right flex-1" dir="rtl">
                    <div>
                      <h4 className="text-optiline-gold text-xs uppercase tracking-wider mb-1 font-mono">التشخيص</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{report.flaw}</p>
                    </div>
                    <div>
                      <h4 className="text-optiline-gold text-xs uppercase tracking-wider mb-1 font-mono">حل Optiline</h4>
                      <p className="text-gray-300 text-sm leading-relaxed font-medium">{report.solution}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      <h4 className="text-optiline-gold text-xs uppercase tracking-wider mb-1 font-mono">حجة العائد على الاستثمار (ROI)</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{report.roi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'scripts' && (
            <motion.div
              key="scripts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-blue-900/20 border border-blue-500/30 text-blue-200 p-4 rounded-lg flex items-center gap-3 font-mono text-sm max-w-3xl mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                STRICT GUIDELINE EXECUTED: Plain text, no bolding, strictly under 80 seconds per script. NO discovery calls. CTA explicitly redirects to Email, WhatsApp, or Optiline web portal.
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {videoScripts.map((script, idx) => (
                  <div key={idx} className="bg-optiline-gray border border-gray-800 p-8 rounded-lg relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-optiline-gold/30 group-hover:bg-optiline-gold transition-colors"></div>
                    <h3 className="text-xl font-display font-semibold mb-6 flex items-center justify-between">
                      {script.company}
                      <span className="text-xs font-mono text-gray-500 bg-gray-900 px-3 py-1 rounded-full">Length: ~140 words (01:10)</span>
                    </h3>
                    <div className="font-mono text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                      {script.script}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'guides' && (
            <motion.div
              key="guides"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {visualGuides.map((guide, idx) => (
                <div key={idx} className="bg-optiline-gray border border-gray-800 rounded-lg overflow-hidden">
                  <div className="bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center">
                    <h3 className="font-display font-semibold text-lg">{guide.company}</h3>
                    <div className="flex gap-2">
                       <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                       <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                       <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4" dir="rtl">
                    {guide.timeline.map((item, tIdx) => (
                      <div key={tIdx} className="flex gap-4 items-start">
                        <div className="bg-optiline-gold/10 border border-optiline-gold/30 text-optiline-gold font-mono text-xs px-2 py-1 rounded shrink-0 whitespace-nowrap mt-1">
                          {item.time}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.instruction}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all relative ${
        active ? 'text-optiline-gold' : 'text-gray-400 hover:text-gray-200'
      }`}
    >
      {icon}
      <span>{label}</span>
      {active && (
        <motion.div 
          layoutId="activeTab"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-optiline-gold"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  );
}
