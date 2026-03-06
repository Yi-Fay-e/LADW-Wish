// --- 1. 從全局變數提取功能 (取代原本的 import) ---
const { useState, useEffect, useMemo } = React;

// --- 2. 核心圖示定義 (徹底修復沈星回與墊池圖示) ---
const Sparkles = ({size = 16}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.912 5.886L20 10.8l-5.886 1.912L12 18.6l-1.912-5.886L4.2 10.8l5.886-1.912z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M21 17v4"/><path d="M19 19h4"/></svg>;
const History = ({size = 14}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>;
const Star = ({size = 14, fill = "currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const Info = ({size = 14}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;
const Clock = ({size = 10}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ArrowLeft = ({size = 20}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
const ChevronLeft = ({size = 20}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>;
const ChevronRight = ({size = 16}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>;
const ChevronDown = ({size = 14}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>;
const Trash2 = ({size = 14}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>;
const Edit2 = ({size = 14}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>;
const Filter = ({size = 12}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const Sun = ({size = 12}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const Moon = ({size = 12}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
const Tag = ({size = 10}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>;
const Crown = ({size = 8}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>;
const BarChart3 = ({size = 18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;
const User = ({size = 12}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const Users = ({size = 12}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Target = ({size = 14}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const Zap = ({size = 14}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;

// --- 專屬男主圖標組件 ---
function CreatorCat({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.27.75 2.53.57 3.83-.25 1.74-1.05 3.06-2.14 4.03C17.15 19.04 15 20 12 20s-5.15-.96-6.43-2.14c-1.09-.97-1.89-2.29-2.14-4.03-.18-1.3 0-2.56.57-3.83 0 0-1.82-6.42-.42-7 1.39-.58 4.64.26 6.42 2.26.65-.17 1.33-.26 2-.26Z" />
      <circle cx="9" cy="12" r="0.8" fill="currentColor" />
      <circle cx="15" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

function ZayneSnowflake({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    </svg>
  );
}

function RafayelFish({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a2 2 0 1 1 0 4 2 2 0 1 1 0-4Z" /><path d="M2 12c0 3.4 2.6 6 6 6 1.2 0 2.5-.5 3.5-1.5L22 7" /><path d="M2 12c0-3.4 2.6-6 6-6 1.2 0 2.5.5 3.5 1.5L22 17" /><path d="M10 12h.01" />
    </svg>
  );
}

function SylusFeather({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" /><line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  );
}

function CalebApple({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-1.5 0-3 .5-4.5 0-3.5-1-4.5-4.5-4.5-8s3-6 6.5-6c1 0 1.7.5 2.5.5s1.5-.5 2.5-.5c3.5 0 6.5 2 6.5 6s-1 7-4.5 8c-1.5.5-3 0-4.5 0z" /><path d="M12 7V3" />
    </svg>
  );
}

// --- 3. 角色與配置 ---
const CHARACTERS = [
  { id: 'xavier', name: '沈星回', engName: 'Xavier', glowColor: 'rgba(255, 235, 59, 0.7)', dimGlow: 'rgba(255, 235, 59, 0.4)', icon: <Star />, solidColor: 'from-yellow-200 via-yellow-500 to-yellow-600', quotes: ["如果這個世界真的已經無處可逃，那至少你還可以逃來我身邊", "如果下一個春天還很遙遠，我們現在就見面吧", "我不會離開，因為你還在這裡", "我的光芒，只朝向你在的方向", "希望我能成為你的歸屬，永遠在你眼中", "還是讓星星自己落下來，留在你身邊吧", "可我本來就偏心你", "無論多少次，無論你在哪，我都會找到你", "樓下的貓很想你，我也是", "你在哪裡，光就在哪裡"] },
  { id: 'zayne', name: '黎深', engName: 'Zayne', glowColor: 'rgba(56, 189, 248, 0.8)', dimGlow: 'rgba(56, 189, 248, 0.4)', icon: <ZayneSnowflake />, solidColor: 'from-sky-100 via-sky-500 to-blue-800', quotes: ["如果是週末見你，我一般從週四開始高興", "只要你需要，永遠都會有一場不會消融的雪只為你而下", "出格的事，總是讓人上癮", "希望你不要生病，不要受傷，不要總是和黎醫生見面，而是多和\"黎深\"見面", "你獨佔春天，我獨佔你", "靈魂先於我的記憶，認出了你", "想你一個人有沒有好好吃飯、照顧好自己的身體", "以後也一起看月亮吧，意中人", "我最想珍藏、最喜歡的瞬間，一定都有你的身影", "我還想要下一個「十年」"] },
  { id: 'rafayel', name: '祁煜', engName: 'Rafayel', glowColor: 'rgba(219, 112, 147, 0.5)', dimGlow: 'rgba(136, 19, 55, 0.3)', icon: <RafayelFish />, solidColor: 'from-[#db7da1] via-[#6b21a8] to-black', quotes: ["等你等了八百年，水母都能走路了", "我數著每天的潮漲潮落，日升月起，終於，要等到和你見面的日子了", "願深海的祝福，與你我同在", "奇怪，今天特別想你", "我想看的世界，在你眼裡", "我為你許下的願望會一直飄行在海上，因為我的火焰永不熄滅", "大海裡最珍貴的寶貝是什麼嗎？你笑一笑，就知道了", "我祝你希望永不滅", "只要你會來，等待就值得", "又見面了，保鏢小姐"] },
  { id: 'sylus', name: '秦徹', engName: 'Sylus', glowColor: 'rgba(239, 68, 68, 0.7)', dimGlow: 'rgba(239, 68, 68, 0.4)', icon: <SylusFeather />, solidColor: 'from-red-900 to-black', quotes: ["我不在乎臨空市怎麼樣，我關心的對象是你", "靈魂相契，永不背叛", "得讓大家看到，我有心上人了", "沒有什麼是比靠自己調整好的狀態更有力量", "我是不是可以認為，即便沒有鏈路了，你也會選擇站在我身邊", "塔爾城也可以開滿鮮花，只為一人開放", "想見你，不需要什麼理由", "有沒有跟你說過，我一直很喜歡你志在必得的樣子", "花瓣帶著你一起出現在龍的夢裡", "一旦我們雙手相握，從此便生死與共了"] },
  { id: 'caleb', name: '夏以晝', engName: 'Caleb', glowColor: 'rgba(251, 146, 60, 0.7)', dimGlow: 'rgba(251, 146, 60, 0.4)', icon: <CalebApple />, solidColor: 'from-orange-500 via-red-600 to-red-800', quotes: ["所有朝你打來的風雨，都不該出現在這個世界上", "你願意給的，就是我想要的", "汪", "下輩子的小海鳥，別再讓我錯過你了", "或許我們天生就屬於彼此，妹妹", "你將指引我返航的方向", "你有沒有想過，我從來都不是你的哥哥", "不需要我？好啊，那我需要什麼？我都可以答應", "夏以晝的弱點，與你有關", "我不罩著你，難道還要別人來"] },
  { id: 'other', name: '墊池', engName: 'Pity', glowColor: 'rgba(148, 163, 184, 0.5)', dimGlow: 'rgba(148, 163, 184, 0.3)', icon: <Info />, solidColor: 'from-slate-700 to-slate-950', quotes: ["請再努力一下，為了你想見的人"] },
];

const MAIN_TABS = [
  { id: 'event', name: '限定池' },
  { id: 'rerun', name: '復刻池' },
  { id: 'special', name: '特殊池' },
  { id: 'standard', name: '常駐池' },
];

const STORAGE_KEYS = {
  HISTORY: 'LDS_WISH_HISTORY_LOCAL',
  POOLS: 'LDS_WISH_POOLS_LOCAL'
};

// --- 4. 主程式 App ---
function App() {
  const [view, setView] = useState('landing');
  const [activeTab, setActiveTab] = useState('event');
  const [filterChar, setFilterChar] = useState(null);
  const [activeQuote, setActiveQuote] = useState('');
  const [history, setHistory] = useState([]);
  const [selectedEventFilter, setSelectedEventFilter] = useState('all');
  const [pools, setPools] = useState({ event: { pity: 0 }, rerun: { pity: 0 }, special: { pity: 0 }, standard: { pity: 0 } });
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const maxPity = 70;

  // --- 本地讀取與儲存 (取代 Firebase) ---
  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
    const savedPools = localStorage.getItem(STORAGE_KEYS.POOLS);
    if (savedHistory) setHistory(JSON.parse(savedHistory));
    if (savedPools) setPools(JSON.parse(savedPools));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.POOLS, JSON.stringify(pools));
  }, [pools]);// --- 統計計算邏輯 (保留妳原始所有的判斷) ---
  const pityInfo = useMemo(() => {
    const poolHistory = history.filter(r => r.poolType === activeTab);
    if (poolHistory.length === 0) {
      return { remaining: maxPity - (pools[activeTab]?.pity || 0), accumulated: pools[activeTab]?.pity || 0 };
    }
    const lastRecord = poolHistory[0];
    return { remaining: lastRecord.remainingAtRecord, accumulated: maxPity - lastRecord.remainingAtRecord };
  }, [history, activeTab, pools]);

  const status = useMemo(() => {
    const poolHistory = history.filter(r => (r.poolType === 'event' || r.poolType === 'rerun') && r.recordType === 'pull');
    if (poolHistory.length === 0) return { isGuaranteed: false, isTargetReady: false };
    const last = poolHistory[0];
    return {
      isGuaranteed: last.isLost5050,
      isTargetReady: last.subPoolType === 'multi' && (last.isNotTarget || last.isLost5050)
    };
  }, [history]);

  const eventAnalysis = useMemo(() => {
    if (selectedEventFilter === 'all') return null;
    const eventRecords = history.filter(r => r.eventName === selectedEventFilter).reverse();
    const pulls = eventRecords.filter(r => r.recordType === 'pull');
    let total = 0;
    const distribution = pulls.map(p => {
      total += p.totalPulls;
      return { ...p, accumulated: total };
    }).reverse();
    return { totalPulls: total, pullCount: pulls.length, distribution };
  }, [history, selectedEventFilter]);

  // --- Modal 狀態與操作 (完全保留妳的編輯邏輯) ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [recordType, setRecordType] = useState('pull');
  const [subPoolType, setSubPoolType] = useState('single');
  const [pityLabel, setPityLabel] = useState('墊池');
  const [cardType, setCardType] = useState('moon');
  const [selectedChar, setSelectedChar] = useState(null);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState(new Date().toISOString().split('T')[0]);
  const [cardName, setCardName] = useState('');
  const [pullCountInput, setPullCountInput] = useState('');
  const [remainingPullsInput, setRemainingPullsInput] = useState(70);
  const [isLost5050, setIsLost5050] = useState(false);
  const [isNotTarget, setIsNotTarget] = useState(false);
  const [inputMode, setInputMode] = useState('cost');

  const openWishModal = () => {
    setEditingId(null); setRecordType('pull'); setSubPoolType('single'); setPityLabel('墊池'); setCardType('moon');
    setPullCountInput(''); setRemainingPullsInput(pityInfo.remaining); setEventName(selectedEventFilter !== 'all' ? selectedEventFilter : '');
    setEventDate(new Date().toISOString().split('T')[0]); setCardName(''); setIsLost5050(false); setIsNotTarget(false); setIsModalOpen(true);
  };

  const openEdit = (record) => {
    setEditingId(record.id); setRecordType(record.recordType); setSubPoolType(record.subPoolType || 'single');
    setPityLabel(record.pityLabel || '墊池'); setCardType(record.cardType); setSelectedChar(record.character);
    setEventName(record.eventName); setEventDate(record.eventDate.replace(/\//g, '-')); setCardName(record.cardName);
    setPullCountInput(record.totalPulls.toString()); setRemainingPullsInput(record.remainingAtRecord);
    setIsLost5050(record.isLost5050); setIsNotTarget(record.isNotTarget); setInputMode(record.recordType === 'pull' ? 'cost' : 'remain'); setIsModalOpen(true);
  };

  const submitRecord = () => {
    let cost, remain, poolPity;
    if (recordType === 'pull') {
      cost = parseInt(pullCountInput) || (maxPity - pityInfo.remaining + 1);
      remain = 70; poolPity = 0;
    } else {
      if (inputMode === 'cost') {
        cost = parseInt(pullCountInput) || 0;
        remain = maxPity - cost;
      } else {
        remain = parseInt(remainingPullsInput) || 70;
        cost = maxPity - remain;
      }
      poolPity = cost;
    }

    const recordData = {
      id: editingId || Date.now().toString(),
      character: selectedChar || 'other',
      eventName: eventName || '一般活動',
      eventDate: eventDate.replace(/-/g, '/'),
      cardName: cardName || (recordType === 'pity' ? pityLabel : '未命名思念'),
      cardType, subPoolType, pityLabel: recordType === 'pity' ? pityLabel : null,
      totalPulls: cost, remainingAtRecord: remain, recordType, isLost5050, isNotTarget,
      poolType: activeTab, date: new Date().toISOString()
    };

    if (editingId) setHistory(prev => prev.map(r => r.id === editingId ? recordData : r));
    else setHistory(prev => [recordData, ...prev]);

    setPools(prev => ({ ...prev, [activeTab]: { pity: poolPity } }));
    setIsModalOpen(false);
  };

  const deleteRecord = (e, id) => {
    e.stopPropagation();
    if (confirm('確定要刪除這筆紀錄嗎？')) {
      setHistory(prev => prev.filter(r => r.id !== id));
    }
  };

  // 匯出/匯入 (原本雲端同步失效後的替代方案)
  const handleExport = () => {
    const blob = new Blob([JSON.stringify({ history, pools }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `LD_Record_${new Date().toISOString().split('T')[0]}.json`; a.click();
  };

  const handleImport = (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const d = JSON.parse(event.target.result);
        setHistory(d.history); setPools(d.pools); alert('數據匯入成功！');
      } catch(e) { alert('匯入失敗，請檢查檔案。'); }
    };
    reader.readAsText(file);
  };

  // --- 顯示過濾與分頁 ---
  const displayHistory = filterChar 
    ? history.filter(r => r.character === filterChar.id) 
    : (selectedEventFilter === 'all' ? history.filter(r => r.poolType === activeTab) : history.filter(r => r.eventName === selectedEventFilter));
  
  const totalPages = Math.ceil(displayHistory.length / itemsPerPage);
  const currentItems = displayHistory.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const eventOptions = ['all', ...new Set(history.map(h => h.eventName).filter(n => n && n !== '一般活動'))];// --- 5. UI 渲染部分 ---

  // 首頁視圖 (Landing View)
  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-[#050508] text-slate-200 flex justify-center">
        <main className="w-full max-w-md bg-black relative min-h-screen flex flex-col items-center justify-between py-24 px-8 overflow-hidden">
          {/* 背景光暈效果 */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-600/20 blur-[120px] rounded-full"></div>
          
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-light italic mb-[-2px]" style={{ fontFamily: 'cursive' }}>Love</h1>
            <p className="text-[10px] text-slate-500 font-bold tracking-[0.4em] uppercase">AND</p>
            <h2 className="text-3xl font-light tracking-[0.25em] uppercase">Deepspace</h2>
          </div>

          <div className="w-full grid grid-cols-3 gap-y-10 gap-x-1 justify-items-center relative z-10">
            {CHARACTERS.map(c => (
              <button 
                key={c.id} 
                onClick={() => { setFilterChar(c); setView('main'); }}
                className="group flex flex-col items-center gap-3 transition-transform active:scale-95"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  style={{ background: `radial-gradient(circle, ${c.glowColor} 0%, transparent 70%)` }}
                >
                  <div className="p-2 text-white transform transition-transform group-hover:scale-110">
                    {c.icon}
                  </div>
                </div>
                <span className="text-[11px] font-bold text-slate-300 tracking-widest uppercase">{c.name}</span>
              </button>
            ))}
          </div>

          <div className="w-full relative z-10 flex flex-col gap-4">
            <button 
              onClick={() => { setFilterChar(null); setView('main'); }}
              className="w-full py-5 bg-white/5 border border-white/10 rounded-full text-[12px] font-bold tracking-[0.6em] uppercase hover:bg-white/10 transition-colors"
            >
              進入紀錄
            </button>
            
            <div className="flex flex-col items-center gap-4">
               <div className="flex items-center gap-2 text-[10px] text-emerald-500 font-bold uppercase tracking-widest">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                 本地保存模式
               </div>
               <div className="flex gap-6">
                 <button onClick={handleExport} className="text-[10px] text-slate-500 uppercase font-black hover:text-white transition-colors">匯出檔案</button>
                 <label className="text-[10px] text-slate-500 uppercase font-black cursor-pointer hover:text-white transition-colors">
                    匯入數據
                    <input type="file" onChange={handleImport} className="hidden" />
                 </label>
               </div>
            </div>
          </div>

          <div className="flex items-center gap-3 opacity-40">
            <CreatorCat />
            <span className="text-[10px] font-black tracking-widest uppercase">Yi.Fay.e</span>
          </div>
        </main>
      </div>
    );
  }

  // 主頁面視圖 (Main View)
  return (
    <div className="min-h-screen bg-[#050508] text-slate-200 flex justify-center">
      {/* 注入妳原本的滾動條樣式，確保橫向移軸外觀一致 */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
          display: flex;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      <main className="w-full max-w-md bg-black/50 backdrop-blur-3xl border-x border-white/5 min-h-screen flex flex-col relative">
        {/* 返回按鈕 */}
        <div className="absolute top-8 left-6 z-20">
          <button 
            onClick={() => { if (filterChar) setFilterChar(null); else setView('landing'); }}
            className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft />
          </button>
        </div>

        {/* 男主統計列表 - 保留原本的橫向移軸設定 */}
        <div className="pt-20 px-6 pb-2">
          <div className="flex justify-between items-center overflow-x-auto custom-scrollbar gap-4 text-center pb-3">
            {CHARACTERS.map(c => (
              <button 
                key={c.id} 
                onClick={() => setFilterChar(c)}
                className={`flex-shrink-0 flex flex-col items-center gap-1.5 transition-all duration-300 ${filterChar?.id === c.id ? 'scale-110 opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: `radial-gradient(circle, ${c.glowColor} 0%, transparent 75%)` }}
                >
                  <div className="p-2 text-white">
                    {c.icon}
                  </div>
                </div>
                <span className="text-[11px] font-black tracking-tighter">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        <header className="pt-8 pb-4 px-8 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-[0.2em]">
            {filterChar ? `${filterChar.name} 統計` : '許願紀錄'}
          </h1>
        </header>{filterChar ? (
          /* 男主個人數據卡片 */
          <div className="px-6 mb-8">
            <div className={`bg-gradient-to-br ${filterChar.solidColor} rounded-[2rem] p-7 text-white shadow-2xl min-h-[160px] flex flex-col justify-center relative overflow-hidden group`}>
              {/* 背景裝飾圖標 */}
              <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 transition-transform group-hover:scale-110 duration-700">
                {React.cloneElement(filterChar.icon, { size: 120 })}
              </div>
              
              <div className="flex justify-between items-start mb-2 relative z-10">
                <div>
                  <p className="text-[11px] font-black opacity-80 uppercase tracking-widest">{filterChar.engName}</p>
                  <h2 className="text-3xl font-black">{filterChar.name}</h2>
                </div>
                <div className="text-right">
                  {filterChar.id !== 'other' && (
                    <div className="flex flex-col items-end">
                      <p className="text-[12px] font-black italic opacity-90">與你見面</p>
                      <p className="text-5xl font-light tracking-tighter">
                        {history.filter(r => r.character === filterChar.id && r.recordType === 'pull').length}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 relative z-10">
                <div className="w-8 h-[2px] bg-white/30 mb-3"></div>
                <p className="text-[13px] font-medium italic leading-relaxed opacity-90">
                  “ {activeQuote || filterChar.quotes[0]} ”
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* 全域統計面板 */
          <>
            <div className="px-6 mb-4">
              <div className="grid grid-cols-4 gap-1 p-1 bg-white/5 rounded-2xl border border-white/10">
                {MAIN_TABS.map(tab => (
                  <button 
                    key={tab.id} 
                    onClick={() => { setActiveTab(tab.id); setCurrentPage(1); }}
                    className={`py-3 rounded-xl text-[11px] font-black transition-all ${activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-6 mb-6">
              <div className="bg-gradient-to-br from-slate-900/60 to-black/80 rounded-[2.5rem] p-8 border border-white/10 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                  <div 
                    className="h-full bg-indigo-500 transition-all duration-1000" 
                    style={{ width: `${(pityInfo.accumulated / 70) * 100}%` }}
                  ></div>
                </div>
                
                <p className="text-[11px] text-slate-200 tracking-[0.4em] font-black mb-3 uppercase">距離保底剩餘</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-6xl font-light text-white tracking-tighter">{pityInfo.remaining}</span>
                  <span className="text-xl text-slate-500 font-light">/ 70</span>
                </div>
                
                <div className="mt-6 flex flex-col items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full text-[11px] font-black bg-white/10 border border-white/20 text-slate-300">
                    已累積 {pityInfo.accumulated} 抽
                  </span>
                  
                  <div className="flex gap-2">
                    <div className={`px-3 py-1 rounded-full text-[11px] font-black border transition-colors ${status.isGuaranteed ? 'bg-rose-500/20 border-rose-500/50 text-rose-200' : 'bg-white/5 border-white/10 text-slate-500'}`}>
                      {status.isGuaranteed ? '大保底' : '小保底'}
                    </div>
                    {status.isTargetReady && (
                      <div className="px-3 py-1 rounded-full text-[11px] font-black border bg-amber-500/20 border-amber-500/50 text-amber-200">
                        定向已就緒
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 mb-8 text-center">
              <button 
                onClick={openWishModal}
                className="w-full py-4 bg-indigo-600 border border-indigo-400 rounded-2xl font-black text-xs text-white flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(79,70,229,0.3)] active:scale-95 transition-all"
              >
                <Sparkles size={16} /> 登錄紀錄
              </button>
            </div>
          </>
        )}{/* 歷史紀錄列表 */}
        <div className="flex-1 bg-black/60 rounded-t-[3.5rem] border-t border-white/10 pt-10 px-8 pb-12 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-black tracking-[0.3em] text-slate-500 uppercase flex items-center gap-2">
              <History size={14} /> 歷程紀錄
            </h2>
            {!filterChar && (
              <div className="relative">
                <select 
                  value={selectedEventFilter} 
                  onChange={(e) => { setSelectedEventFilter(e.target.value); setCurrentPage(1); }}
                  className="bg-white/5 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-[11px] font-black text-slate-400 outline-none appearance-none"
                >
                  <option value="all">全活動歷程</option>
                  {eventOptions.filter(o => o !== 'all').map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <Filter size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
              </div>
            )}
          </div>

          <div className="space-y-4">
            {currentItems.map((record) => {
              const charObj = CHARACTERS.find(c => c.id === record.character) || CHARACTERS[5];
              return (
                <div 
                  key={record.id} 
                  onClick={() => openEdit(record)}
                  className={`rounded-3xl p-5 border relative overflow-hidden transition-all active:scale-[0.98] cursor-pointer group ${
                    record.recordType === 'pity' 
                      ? 'bg-slate-900/40 border-slate-800/50' 
                      : 'bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/30'
                  }`}
                >
                  {/* 操作按鈕 */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={(e) => { e.stopPropagation(); openEdit(record); }}
                      className="p-1.5 bg-white/10 rounded-lg text-slate-300 hover:bg-white/20"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button 
                      onClick={(e) => deleteRecord(e, record.id)}
                      className="p-1.5 bg-rose-500/10 rounded-lg text-rose-400 hover:bg-rose-500/20"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="flex justify-between items-start mb-3 relative z-10">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                      record.recordType === 'pity' ? 'bg-indigo-900/40 text-indigo-300' : 'bg-amber-500/20 text-amber-500'
                    }`}>
                      {record.recordType === 'pity' ? '墊池' : '出金'}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1 mr-16">
                      <Clock size={10} /> {record.eventDate}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${charObj.solidColor} flex items-center justify-center shadow-lg text-white`}>
                      {/* 這裡會正確顯示沈星回的 Star 或其他男主圖示 */}
                      {React.cloneElement(charObj.icon, { size: 18 })}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-sm text-white">{charObj.name}</span>
                        <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                          record.recordType === 'pity' ? 'text-slate-400 bg-slate-800' : 'text-black bg-amber-400'
                        }`}>
                          {record.recordType === 'pity' ? `${record.totalPulls}抽 (剩${record.remainingAtRecord})` : `第 ${record.totalPulls} 抽`}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-1">
                        <Tag size={10} className="text-slate-600" />
                        <p className="text-[10px] font-black text-indigo-400/80 truncate">{record.eventName}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {record.cardType === 'sun' ? <Sun size={12} className="text-amber-500" /> : <Moon size={12} className="text-indigo-400" />}
                        <p className="text-[13px] font-bold text-slate-200 truncate">{record.cardName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 分頁控制 */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button 
                onClick={() => { setCurrentPage(p => Math.max(p - 1, 1)); window.scrollTo(0, 0); }}
                disabled={currentPage === 1}
                className="p-2 text-slate-400 bg-white/5 rounded-xl disabled:opacity-20"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black text-white">{currentPage}</span>
                <span className="text-[11px] font-black text-slate-600">/</span>
                <span className="text-[11px] font-black text-slate-600">{totalPages}</span>
              </div>
              <button 
                onClick={() => { setCurrentPage(p => Math.min(p + 1, totalPages)); window.scrollTo(0, 0); }}
                disabled={currentPage === totalPages}
                className="p-2 text-slate-400 bg-white/5 rounded-xl disabled:opacity-20"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </main>{/* 6. 登錄紀錄彈出視窗 (Modal) - 徹底保留妳的佈局與功能 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-[#0c0c16] border border-white/10 rounded-[3rem] w-full max-w-sm relative p-8 shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-1 bg-white/10 rounded-full"></div>
            </div>
            
            <h3 className="text-lg font-black text-white tracking-widest mb-8 text-center uppercase">
              {editingId ? '編輯思念紀錄' : '登錄思念紀錄'}
            </h3>

            <div className="space-y-6">
              {/* 紀錄性質切換 */}
              <div>
                <label className="text-[10px] text-slate-500 font-black uppercase mb-3 block tracking-widest text-center">紀錄性質</label>
                <div className="grid grid-cols-2 gap-3 p-1 bg-white/5 rounded-2xl">
                  <button 
                    onClick={() => setRecordType('pull')}
                    className={`py-3 rounded-xl text-[12px] font-black transition-all ${recordType === 'pull' ? 'bg-amber-500 text-black shadow-lg' : 'text-slate-500'}`}
                  >
                    出金
                  </button>
                  <button 
                    onClick={() => setRecordType('pity')}
                    className={`py-3 rounded-xl text-[12px] font-black transition-all ${recordType === 'pity' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500'}`}
                  >
                    墊池
                  </button>
                </div>
              </div>

              {/* 思念角色選擇 */}
              <div>
                <label className="text-[10px] text-slate-500 font-black uppercase mb-2 block tracking-widest">思念角色</label>
                <div className="grid grid-cols-3 gap-2">
                  {CHARACTERS.map(c => (
                    <button 
                      key={c.id} 
                      onClick={() => setSelectedChar(c.id)}
                      className={`py-3 rounded-xl border text-[10px] font-black transition-all ${selectedChar === c.id ? 'bg-white/10 border-white/40 text-white shadow-lg' : 'bg-white/5 border-transparent text-slate-400'}`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 活動與屬性 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-500 font-black uppercase mb-2 block tracking-widest">思念日期</label>
                  <input 
                    type="date" 
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[12px] text-slate-200 outline-none focus:border-indigo-500/50"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 font-black uppercase mb-2 block tracking-widest">思念星級</label>
                  <div className="flex p-1 bg-white/5 rounded-xl">
                    <button onClick={() => setCardType('sun')} className={`flex-1 py-2 rounded-lg flex justify-center ${cardType === 'sun' ? 'bg-amber-500/20 text-amber-500' : 'text-slate-600'}`}><Sun size={14} /></button>
                    <button onClick={() => setCardType('moon')} className={`flex-1 py-2 rounded-lg flex justify-center ${cardType === 'moon' ? 'bg-indigo-500/20 text-indigo-400' : 'text-slate-600'}`}><Moon size={14} /></button>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-500 font-black uppercase mb-2 block tracking-widest">活動名稱</label>
                <input 
                  type="text" 
                  placeholder="例：他的邀約"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[12px] text-slate-200 outline-none focus:border-indigo-500/50"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-500 font-black uppercase mb-2 block tracking-widest">思念全名</label>
                <input 
                  type="text" 
                  placeholder="例如：沈星回．心緒捕捉"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[12px] text-slate-200 outline-none focus:border-indigo-500/50"
                />
              </div>

              {/* 抽數填寫區 */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                {recordType === 'pull' ? (
                  <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked={isLost5050} onChange={(e) => setIsLost5050(e.target.checked)} className="w-4 h-4 rounded border-white/10 bg-black text-indigo-600" />
                      <label className="text-[11px] font-black text-slate-400">是否歪了 (小保底失敗)</label>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="text-[10px] text-slate-500 font-black uppercase mb-3 block tracking-widest text-center">選擇填寫方式</label>
                    <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-xl">
                       <button onClick={() => setInputMode('cost')} className={`py-2 rounded-lg text-[10px] font-black ${inputMode === 'cost' ? 'bg-white/10 text-white' : 'text-slate-500'}`}>花費抽數</button>
                       <button onClick={() => setInputMode('remain')} className={`py-2 rounded-lg text-[10px] font-black ${inputMode === 'remain' ? 'bg-white/10 text-white' : 'text-slate-500'}`}>剩餘抽數</button>
                    </div>
                  </div>
                )}
                
                <div>
                  <label className="text-[10px] text-slate-500 font-black uppercase mb-2 block tracking-widest">
                    {inputMode === 'cost' ? '花費抽數' : '剩餘抽數'}
                  </label>
                  <input 
                    type="number" 
                    value={inputMode === 'cost' ? pullCountInput : remainingPullsInput}
                    onChange={(e) => inputMode === 'cost' ? setPullCountInput(e.target.value) : setRemainingPullsInput(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[12px] text-slate-200 focus:outline-none focus:border-indigo-500/50"
                  />
                </div>
              </div>

              <button 
                onClick={submitRecord}
                className="w-full py-5 rounded-full bg-indigo-600 text-white font-black text-[11px] uppercase tracking-[0.3em] shadow-[0_10px_20px_rgba(79,70,229,0.3)] active:scale-95 transition-all"
              >
                {editingId ? '更新紀錄' : '確認登錄'}
              </button>
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full py-2 text-[10px] font-black text-slate-600 uppercase tracking-widest"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 將 App 渲染到 DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
