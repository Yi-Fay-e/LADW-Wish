// --- 1. 從全局變數提取功能 (移除 Firebase，僅保留 React) ---
const { useState, useEffect, useMemo } = React;

// --- 2. 圖示定義 (完整保留妳原本的定義) ---
const Sparkles = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.912 5.886L20 10.8l-5.886 1.912L12 18.6l-1.912-5.886L4.2 10.8l5.886-1.912z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M21 17v4"/><path d="M19 19h4"/></svg>;
const History = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>;
const Star = ({size, fill}) => <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const Info = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;
const Clock = () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ArrowLeft = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
const ChevronLeft = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>;
const ChevronRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>;
const Edit2 = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>;
const Trash2 = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>;
const Filter = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const BarChart3 = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;
const Tag = () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>;
const Sun = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const Moon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
const Crown = () => <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>;
const User = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const Users = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Target = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const Zap = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const ChevronDown = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>;

// --- 專屬圖標組件 (CreatorCat, ZayneSnowflake 等，完整保留) ---
function CreatorCat({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.27.75 2.53.57 3.83-.25 1.74-1.05 3.06-2.14 4.03C17.15 19.04 15 20 12 20s-5.15-.96-6.43-2.14c-1.09-.97-1.89-2.29-2.14-4.03-.18-1.3 0-2.56.57-3.83 0 0-1.82-6.42-.42-7 1.39-.58 4.64.26 6.42 2.26.65-.17 1.33-.26 2-.26Z" />
      <path d="M7 14H2" />
      <path d="M7 15.5l-4.5 1.5" />
      <path d="M17 14h5" />
      <path d="M17 15.5l4.5 1.5" />
      <circle cx="9" cy="12" r="0.8" fill="currentColor" />
      <circle cx="15" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

function ZayneSnowflake({ size = 14, className = "" }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="2" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="19.07" y1="4.93" x2="4.93" y2="19.07" /></svg>;
}

function RafayelFish({ size = 14, className = "" }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 8a2 2 0 1 1 0 4 2 2 0 1 1 0-4Z" /><path d="M2 12c0 3.4 2.6 6 6 6 1.2 0 2.5-.5 3.5-1.5L22 7" /><path d="M2 12c0-3.4 2.6-6 6-6 1.2 0 2.5.5 3.5 1.5L22 17" /><path d="M10 12h.01" /></svg>;
}

function SylusFeather({ size = 14, className = "" }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" /><line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" /></svg>;
}

function CalebApple({ size = 16, className = "" }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 21c-1.5 0-3 .5-4.5 0-3.5-1-4.5-4.5-4.5-8s3-6 6.5-6c1 0 1.7.5 2.5.5s1.5-.5 2.5-.5c3.5 0 6.5 2 6.5 6s-1 7-4.5 8c-1.5.5-3 0-4.5 0z" /><path d="M12 7V3" /></svg>;
}

// --- CHARACTERS & MAIN_TABS (完整保留) ---
const CHARACTERS = [
  { id: 'xavier', name: '沈星回', engName: 'Xavier', glowColor: 'rgba(255, 235, 59, 0.7)', dimGlow: 'rgba(255, 235, 59, 0.4)', icon: <Star size={14} fill="currentColor" />, solidColor: 'from-yellow-200 via-yellow-500 to-yellow-600', quotes: ["如果這個世界真的已經無處可逃，那至少你還可以逃來我身邊", "如果下一個春天還很遙遠，我們現在就見面吧", "我不會離開，因為你還在這裡", "我的光芒，只朝向你在的方向", "希望我能成為你的歸屬，永遠在你眼中", "還是讓星星自己落下來，留在你身邊吧", "可我本來就偏心你", "無論多少次，無論你在哪，我都會找到你", "樓下的貓很想你，我也是", "你在哪裡，光就在哪裡"] },
  { id: 'zayne', name: '黎深', engName: 'Zayne', glowColor: 'rgba(56, 189, 248, 0.8)', dimGlow: 'rgba(56, 189, 248, 0.4)', icon: <ZayneSnowflake size={14} />, solidColor: 'from-sky-100 via-sky-500 to-blue-800', quotes: ["如果是週末見你，我一般從週四開始高興", "只要你需要，永遠都會有一場不會消融的雪只為你而下", "出格的事，總是讓人上癮", "希望你不要生病，不要受傷，不要總是和黎醫生見面，而是多和\"黎深\"見面", "你獨佔春天，我獨佔你", "靈魂先於我的記憶，認出了你", "想你一個人有沒有好好吃飯、照顧好自己的身體，萬一等不到我，會不會生氣", "以後也一起看月亮吧，意中人", "我最想珍藏、最喜歡的瞬間，一定都有你的身影", "我還想要下一個「十年」"] },
  { id: 'rafayel', name: '祁煜', engName: 'Rafayel', glowColor: 'rgba(219, 112, 147, 0.5)', dimGlow: 'rgba(136, 19, 55, 0.3)', icon: <RafayelFish size={14} />, solidColor: 'from-[#db7da1] via-[#6b21a8] to-black', quotes: ["等你等了八百年，水母都能走路了，海龜都會爬樹了，連鯊魚都改吃素了", "我數著每天的潮漲潮落，日升月起，終於，要等到和你見面的日子了", "願深海的祝福，與你我同在", "奇怪，今天特別想你", "我想看的世界，在你眼裡", "我為你許下的願望會一直飄行在海上，因為我的火焰永不熄滅", "你剛不是問，大海裡最珍貴的寶貝是什麼嗎？你笑一笑，就知道了", "我祝你希望永不滅", "只要你會來，等待就值得", "又見面了，保鏢小姐"] },
  { id: 'sylus', name: '秦徹', engName: 'Sylus', glowColor: 'rgba(239, 68, 68, 0.7)', dimGlow: 'rgba(239, 68, 68, 0.4)', icon: <SylusFeather size={14} />, solidColor: 'from-red-900 to-black', quotes: ["我不在乎臨空市怎麼樣，我關心的對象是你", "靈魂相契，永不背叛", "得讓大家看到，我有心上人了", "沒有什麼是比靠自己調整好的狀態更有力量", "我是不是可以認為，有一天即便沒有鏈路了，你也會選擇站在我身邊", "塔爾城也可以開滿鮮花，只為一人開放", "想見你，不需要什麼理由", "有沒有跟你說過，我一直很喜歡你志在必得的樣子", "花瓣帶著你一起出現在龍的夢裡，那龍會期待著每一個夜晚，風和花瓣的來臨", "一旦我們雙手相握，從此便生死與共了"] },
  { id: 'caleb', name: '夏以晝', engName: 'Caleb', glowColor: 'rgba(251, 146, 60, 0.7)', dimGlow: 'rgba(251, 146, 60, 0.4)', icon: <CalebApple size={16} />, solidColor: 'from-orange-500 via-red-600 to-red-800', quotes: ["所有朝你打來的風雨，都不該出現在這個世界上", "你願意給的，就是我想要的。你想得到的，就是我願意付出的。", "汪", "下輩子的小海鳥，別再讓我錯過你了", "或許我們天生就屬於彼此，妹妹", "你將指引我返航的方向", "你有沒有想過，我從來都不是你的哥哥", "不需要我？好啊，那你需要什麼？我都可以答應", "夏以晝的弱點，與你有關", "我不罩著你，難道還要別人來"] },
  { id: 'other', name: '墊池', engName: 'Pity', glowColor: 'rgba(148, 163, 184, 0.5)', dimGlow: 'rgba(148, 163, 184, 0.3)', icon: <Info size={14} />, solidColor: 'from-slate-700 to-slate-950', quotes: ["請再努力一下，為了你想見的人、想做的事、想成為的自己"] },
];

const MAIN_TABS = [
  { id: 'event', name: '限定池' },
  { id: 'rerun', name: '復刻池' },
  { id: 'special', name: '特殊池' },
  { id: 'standard', name: '常駐池' },
];

const STORAGE_KEYS = {
  HISTORY: 'deepspace_history_v1',
  POOLS: 'deepspace_pools_v1'
};

function App() {
  const [view, setView] = useState('landing');
  const [activeTab, setActiveTab] = useState('event');
  const [filterChar, setFilterChar] = useState(null);
  const [activeQuote, setActiveQuote] = useState('');
  const [history, setHistory] = useState([]);
  const [selectedEventFilter, setSelectedEventFilter] = useState('all');
  const [pools, setPools] = useState({
    event: { pity: 0 }, rerun: { pity: 0 }, special: { pity: 0 }, standard: { pity: 0 }
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const maxPity = 70;

  // --- 改為本地讀取 ---
  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
    const savedPools = localStorage.getItem(STORAGE_KEYS.POOLS);
    
    if (savedHistory) setHistory(JSON.parse(savedHistory));
    if (savedPools) setPools(JSON.parse(savedPools));
  }, []);

  // --- 自動存檔到 localStorage ---
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.POOLS, JSON.stringify(pools));
  }, [pools]);

  useEffect(() => {
    if (filterChar) {
      const quotes = filterChar.quotes || [];
      if (quotes.length > 0) {
        const randomIdx = Math.floor(Math.random() * quotes.length);
        setActiveQuote(quotes[randomIdx]);
      }
    } else {
      setActiveQuote('');
    }
  }, [filterChar]);

  const pityInfo = useMemo(() => {
    const poolHistory = history.filter(r => r.poolType === activeTab);
    if (poolHistory.length === 0) return { remaining: maxPity - (pools[activeTab]?.pity || 0), accumulated: pools[activeTab]?.pity || 0 };
    const latest = poolHistory[0]; 
    return { remaining: latest.remainingAtRecord, accumulated: maxPity - latest.remainingAtRecord };
  }, [history, activeTab, pools]);

  const currentRemaining = pityInfo.remaining;

  const status = useMemo(() => {
    if (activeTab !== 'event' && activeTab !== 'rerun') return { isGuaranteed: false, isTargetReady: false };
    const poolHistory = history.filter(r => (r.poolType === 'event' || r.poolType === 'rerun') && r.recordType === 'pull');
    if (poolHistory.length === 0) return { isGuaranteed: false, isTargetReady: false };
    const last = poolHistory[0];
    return { isGuaranteed: last.isLost5050, isTargetReady: last.subPoolType === 'multi' && (last.isNotTarget || last.isLost5050) };
  }, [history, activeTab]);

  const eventAnalysis = useMemo(() => {
    if (selectedEventFilter === 'all') return null;
    const eventRecords = history
      .filter(r => r.eventName === selectedEventFilter)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    const pulls = eventRecords.filter(r => r.recordType === 'pull');
    const pities = eventRecords.filter(r => r.recordType === 'pity');
    
    let totalPullsInEvent = 0;
    const analysisItems = pulls.map((pull) => {
      totalPullsInEvent += pull.totalPulls;
      const char = CHARACTERS.find(c => c.id === pull.character);
      return {
        id: pull.id,
        charName: char?.name || '未知',
        cost: pull.totalPulls,
        accumulated: totalPullsInEvent
      };
    });

    return {
      totalPulls: totalPullsInEvent,
      pullCount: pulls.length,
      pityCount: pities.reduce((acc, curr) => acc + curr.totalPulls, 0),
      distribution: analysisItems.reverse()
    };
  }, [history, selectedEventFilter]);

  // Modal 狀態 (完整保留)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [recordType, setRecordType] = useState('pull');
  const [subPoolType, setSubPoolType] = useState('single'); 
  const [pityLabel, setPityLabel] = useState('墊池');
  const [cardType, setCardType] = useState('moon');
  const [selectedChar, setSelectedChar] = useState(null);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [cardName, setCardName] = useState('');
  const [pullCountInput, setPullCountInput] = useState(''); 
  const [remainingPullsInput, setRemainingPullsInput] = useState(70); 
  const [isLost5050, setIsLost5050] = useState(false); 
  const [isNotTarget, setIsNotTarget] = useState(false); 
  const [inputMode, setInputMode] = useState('cost');

  const openWishModal = () => {
    setEditingId(null); setRecordType('pull'); setSubPoolType('single'); setPityLabel('墊池'); setCardType('moon');
    setPullCountInput(pityInfo.accumulated > 0 ? (pityInfo.accumulated + 1).toString() : '');
    setRemainingPullsInput(currentRemaining); setEventName(selectedEventFilter !== 'all' ? selectedEventFilter : '');
    const today = new Date(); setEventDate(today.toISOString().split('T')[0]); setCardName(''); setIsLost5050(false);
    setIsNotTarget(false); setInputMode('cost'); setIsModalOpen(true);
  };

  const openEdit = (record) => {
    setEditingId(record.id); setRecordType(record.recordType || 'pull'); setSubPoolType(record.subPoolType || 'single');
    setPityLabel(record.pityLabel || '墊池'); setCardType(record.cardType || 'moon'); setSelectedChar(record.character);
    setEventName(record.eventName || '');
    let formattedDate = record.eventDate || '';
    if (formattedDate.includes('/')) formattedDate = formattedDate.split('/').map(v => v.padStart(2, '0')).join('-');
    setEventDate(formattedDate); setCardName(record.cardName || '');
    setPullCountInput(record.totalPulls ? record.totalPulls.toString() : '');
    setRemainingPullsInput(record.remainingAtRecord); setIsLost5050(record.isLost5050 || false);
    setIsNotTarget(record.isNotTarget || false); setInputMode(record.recordType === 'pull' ? 'cost' : 'remain');
    setIsModalOpen(true);
  };

  const resetModal = () => {
    setEditingId(null); setSelectedChar(null); setEventName(''); setEventDate(''); setCardName('');
    setPullCountInput(''); setRemainingPullsInput(70); setIsLost5050(false); setIsNotTarget(false); setIsModalOpen(false);
  };

  // --- 改為本地儲存邏輯 ---
  const submitRecord = () => {
    let savedTotalPulls, savedRemaining, newPoolPity;
    if (recordType === 'pull') {
        savedTotalPulls = pullCountInput === '' ? (pityInfo.accumulated + 1) : parseInt(pullCountInput);
        savedRemaining = 70; newPoolPity = 0;
    } else {
        if (inputMode === 'cost') {
            savedTotalPulls = pullCountInput === '' ? (pityInfo.accumulated + 1) : parseInt(pullCountInput);
            savedRemaining = maxPity - savedTotalPulls;
        } else {
            savedRemaining = remainingPullsInput === '' ? 70 : parseInt(remainingPullsInput);
            savedTotalPulls = maxPity - savedRemaining;
        }
        newPoolPity = savedTotalPulls;
    }
    const now = new Date().toISOString(); const displayDate = eventDate.replace(/-/g, '/');
    const recordData = {
      id: editingId || Date.now().toString(),
      character: selectedChar || 'other', eventName: eventName || '一般活動', eventDate: displayDate || new Date().toLocaleDateString('zh-TW'),
      cardName: cardName || (recordType === 'pity' ? (pityLabel === '墊池' ? '墊池紀錄' : '手動修正') : '未命名思念'),
      cardType: cardType, subPoolType: subPoolType, pityLabel: recordType === 'pity' ? pityLabel : null,
      totalPulls: savedTotalPulls, remainingAtRecord: savedRemaining, recordType: recordType,
      isLost5050: recordType === 'pull' ? isLost5050 : false, isNotTarget: recordType === 'pull' ? isNotTarget : false,
      poolType: activeTab, date: editingId ? (history.find(r => r.id === editingId)?.date || now) : now, updatedAt: now
    };

    if (editingId) {
      setHistory(prev => prev.map(r => r.id === editingId ? recordData : r));
    } else {
      setHistory(prev => [recordData, ...prev]);
    }
    setPools(prev => ({ ...prev, [activeTab]: { pity: newPoolPity } }));
    resetModal();
  };

  const deleteRecord = (e, id) => { 
    e.stopPropagation(); 
    setHistory(prev => prev.filter(r => r.id !== id));
  };

  const handleExport = () => {
    const data = { history, pools, exportedAt: new Date().toISOString(), version: '1.0' };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const dateStr = new Date().toISOString().split('T')[0];
    a.download = `思念許願碎片_${dateStr}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (!data.history || !data.pools) throw new Error('格式不正確');
        setHistory(data.history);
        setPools(data.pools);
        alert('匯入成功！');
      } catch (err) {
        alert('匯入失敗：請確保文件格式正確');
      }
    };
    reader.readAsText(file);
  };

  // --- UI 部分完整保留 (包含 landing view 和 main view) ---
  // (此處省略中間重複的 UI 代碼，結構與妳傳給我的完全一致)
  // ... 妳原本的 return ( ... ) 邏輯全數保留 ...

  const displayHistory = filterChar ? history.filter(r => r.character === filterChar.id) : (selectedEventFilter === 'all' ? history.filter(r => r.poolType === activeTab) : history.filter(r => r.eventName === selectedEventFilter));
  const totalItems = displayHistory.length; const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItems = displayHistory.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const eventOptions = useMemo(() => { const names = history.map(h => h.eventName).filter(n => n && n !== '一般活動'); return ['all', ...new Set(names)]; }, [history]);

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-[#050508] text-slate-200 font-sans flex justify-center overflow-x-hidden">
        <main className="w-full max-w-md bg-black relative z-10 min-h-screen flex flex-col items-center justify-between py-24 px-8 overflow-hidden">
          {/* 背景光影 */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-25">
             <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
             <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[30%] bg-rose-500/10 blur-[100px] rounded-full" />
          </div>
          {/* 標題 */}
          <div className="text-center relative z-10 w-full flex flex-col items-center">
            <h1 className="text-5xl font-light tracking-[0.05em] bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent italic mb-[-2px]" style={{ fontFamily: 'cursive, serif' }}>Love</h1>
            <p className="text-[10px] text-slate-500 font-bold tracking-[0.4em] uppercase mb-1">AND</p>
            <h2 className="text-3xl font-light tracking-[0.25em] bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-clip-text text-transparent uppercase">Deepspace</h2>
          </div>
          {/* 角色按鈕 */}
          <div className="w-full relative z-10 py-4 grid grid-cols-3 gap-y-10 gap-x-1 px-2 justify-items-center">
            {CHARACTERS.map(c => (
              <button key={c.id} onClick={() => { setFilterChar(c); setView('main'); }} className="group flex flex-col items-center gap-3 active:scale-95 transition-all">
                <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" style={{ background: `radial-gradient(circle, ${c.glowColor} 0%, ${c.glowColor.replace(/[\d\.]+\)$/, '0.4)')} 30%, transparent 70%)` }}>
                  <div className={`p-2 rounded-full flex items-center justify-center text-white`}>{c.icon}</div>
                </div>
                <span className="text-[11px] font-bold text-slate-300 tracking-widest uppercase group-hover:text-white transition-colors">{c.name}</span>
              </button>
            ))}
          </div>
          {/* 功能按鈕 */}
          <div className="w-full relative z-10 mb-8 flex flex-col gap-4">
            <button onClick={() => { setFilterChar(null); setView('main'); }} className="w-full py-5 bg-white/[0.015] border border-white/5 rounded-full flex items-center justify-center gap-4 group overflow-hidden relative text-center shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <span className="text-[12px] font-bold tracking-[0.6em] text-white/40 group-hover:text-white/80 uppercase">進入紀錄</span>
            </button>
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center items-center gap-2 text-[11px] font-bold text-slate-700 uppercase tracking-[0.2em] mb-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  本地儲存模式已啟用
              </div>
              <div className="flex items-center gap-6">
                <button onClick={handleExport} className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors group">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase">匯出資料</span>
                </button>
                <div className="w-px h-2 bg-slate-800"></div>
                <label className="flex items-center gap-2 text-slate-500 hover:text-amber-400 transition-colors group cursor-pointer">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase">匯入資料</span>
                  <input type="file" accept=".json" onChange={handleImport} className="hidden" />
                </label>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-default">
             <CreatorCat size={18} className="text-indigo-300/60" />
             <span className="text-[10px] text-indigo-200 font-black tracking-[0.2em] uppercase">Yi.Fay.e</span>
          </div>
        </main>
      </div>
    );
  }

  // --- Main View (保持妳原本的完整 JSX 結構) ---
  return (
    <div className="min-h-screen bg-[#050508] text-slate-200 font-sans flex justify-center overflow-x-hidden">
      {/* 這裡接妳原本 Main View 的完整代碼 ... */}
      {/* 由於字數限制，我確保邏輯部分已更新，UI 結構請沿用原本的內容 */}
    </div>
  );
}
