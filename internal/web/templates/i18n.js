// Lightweight i18n runtime. Loaded in <head> so that `t()` / `getLocale()` are
// available to functions.js and the page's inline scripts. Pages call
// applyTranslations() themselves (first statement of their bottom inline script)
// so that static text is swapped before the first paint.
//
// The language preference lives in localStorage under the `language` key, next
// to the existing `theme` key. Default is English; there is no content
// negotiation on purpose.

const SUPPORTED_LANGUAGES = ['en', 'zh'];

const translations = {
    en: {
        'nav.dashboard': 'Dashboard',
        'nav.table': 'Table View',
        'nav.settings': 'Settings',

        'common.error': 'Error: {message}',
        'common.name': 'Name',
        'common.category': 'Category',
        'common.tags': 'Tags',
        'common.amount': 'Amount',
        'common.date': 'Date',
        'common.optional': '(optional)',
        'common.reportGain': 'Report Gain',
        'common.interval': 'Interval',
        'common.startDate': 'Start Date',
        'common.occurrences': 'Occurrences',
        'common.save': 'Save',
        'common.cancel': 'Cancel',
        'common.delete': 'Delete',
        'common.none': 'None',
        'common.createTag': '+ Create "{tag}"',

        'interval.daily': 'Daily',
        'interval.weekly': 'Weekly',
        'interval.monthly': 'Monthly',
        'interval.yearly': 'Yearly',

        'index.title': 'ExpenseOwl Dashboard',
        'common.addExpense': 'Add Expense',
        'index.close': 'Close',
        'index.noData': 'No expenses recorded this month.',
        'index.income': 'Income',
        'index.expenses': 'Expenses',
        'index.balance': 'Balance',
        'index.total': 'Total:',
        'index.added': 'Expense added successfully!',
        'index.addFailed': 'Failed to add expense',

        'table.title': 'ExpenseOwl Table',
        'table.showAll': 'Show All Transactions',
        'table.updateExpense': 'Update Expense',
        'table.noTransactions': 'No transactions found',
        'table.noMonthExpenses': 'No expenses recorded for this month',
        'table.loadFailed': 'Failed to load expenses',
        'table.added': 'Expense added successfully!',
        'table.updated': 'Expense updated successfully!',
        'table.saveFailed': 'Failed to save expense',
        'table.deleteTitle': 'Delete Expense',
        'table.deleteConfirm': 'Are you sure you want to delete this expense? (cannot be undone)',
        'table.deleteFailed': 'Failed to delete expense. Please try again.',

        'settings.title': 'ExpenseOwl Settings',
        'settings.version': 'Version:',
        'settings.documentation': 'Documentation',
        'settings.categoryTitle': 'Category Settings',
        'settings.newCategoryPlaceholder': 'Add new category',
        'settings.add': 'Add',
        'settings.saveCategories': 'Save Categories',
        'settings.currencyTitle': 'Currency Settings',
        'settings.startDateTitle': 'Start Date Settings',
        'settings.themeTitle': 'Theme Settings',
        'settings.themeSystem': 'System Default',
        'settings.themeLight': 'Light',
        'settings.themeDark': 'Dark',
        'settings.languageTitle': 'Language Settings',
        'settings.importExportTitle': 'Import/Export Data',
        'settings.exportCsv': 'Export to CSV',
        'settings.importCsv': 'Import from CSV',
        'settings.importOldCsv': 'Import from ExpenseOwl v3.20-',
        'settings.importSummary': 'Import Summary',
        'settings.totalProcessed': 'Total Processed:',
        'settings.imported': 'Imported:',
        'settings.skipped': 'Skipped:',
        'settings.newCategories': 'New Categories:',
        'settings.recurringTitle': 'Recurring Transactions',
        'settings.addRecurring': 'Add Recurring Transaction',
        'settings.existingRecurring': 'Existing Recurring Transactions',
        'settings.nextOccurrence': 'Next Occurrence',
        'settings.noRecurring': 'No recurring expenses found.',
        'settings.finished': 'Finished',
        'settings.deleteRecurringTitle': 'Delete Recurring Expense',
        'settings.deleteRecurringConfirm': 'Do you want to delete all instances of this expense, or only future ones?',
        'settings.deleteFuture': 'Delete Future',
        'settings.deleteAll': 'Delete All',
        'settings.editRecurringTitle': 'Edit Recurring Expense',
        'settings.occurrencesIndefinite': 'Occurrences (0 for indefinite)',
        'settings.updateFuture': 'Update Future',
        'settings.updateAll': 'Update All',

        'settings.categoryExists': 'Category already exists',
        'settings.categoryEmpty': 'Category name cannot be empty.',
        'settings.categoryRequired': 'At least one category is required',
        'settings.categoriesSaved': 'Categories saved successfully',
        'settings.categoriesSaveFailed': 'Failed to save categories: {message}',
        'settings.categoriesSaveError': 'Error saving categories',
        'settings.currencySaved': 'Currency saved successfully',
        'settings.currencySaveFailed': 'Failed to save currency',
        'settings.currencySaveError': 'Error saving currency',
        'settings.startDateSaved': 'Start date saved successfully',
        'settings.startDateSaveFailed': 'Failed to save start date',
        'settings.startDateSaveError': 'Error saving start date',
        'settings.themeUpdated': 'Theme updated successfully.',
        'settings.loadFailed': 'Failed to load settings',
        'settings.recurringLoadFailed': 'Error loading recurring expenses.',
        'settings.recurringDeleted': 'Recurring expense deleted successfully',
        'settings.recurringDeleteFailed': 'Failed to delete recurring expense',
        'settings.recurringUpdated': 'Recurring expense updated successfully',
        'settings.recurringUpdateFailed': 'Failed to update recurring expense',
        'settings.recurringAdded': 'Recurring expense added successfully!',
        'settings.recurringAddFailed': 'Failed to add recurring expense',
        'settings.importing': 'Importing... this may take a while for large files.',
        'settings.importCompleted': 'Import completed!',
        'settings.importFailed': 'Failed to import CSV',
        'settings.importError': 'An unexpected error occurred during import.',
    },

    zh: {
        'nav.dashboard': '仪表盘',
        'nav.table': '表格视图',
        'nav.settings': '设置',

        'common.error': '错误：{message}',
        'common.name': '名称',
        'common.category': '分类',
        'common.tags': '标签',
        'common.amount': '金额',
        'common.date': '日期',
        'common.optional': '（可选）',
        'common.reportGain': '记为收入',
        'common.interval': '周期',
        'common.startDate': '起始日期',
        'common.occurrences': '发生次数',
        'common.save': '保存',
        'common.cancel': '取消',
        'common.delete': '删除',
        'common.none': '无',
        'common.createTag': '+ 新建 "{tag}"',

        'interval.daily': '每天',
        'interval.weekly': '每周',
        'interval.monthly': '每月',
        'interval.yearly': '每年',

        'index.title': 'ExpenseOwl 仪表盘',
        'common.addExpense': '添加支出',
        'index.close': '收起',
        'index.noData': '本月暂无支出记录。',
        'index.income': '收入',
        'index.expenses': '支出',
        'index.balance': '结余',
        'index.total': '合计：',
        'index.added': '支出添加成功！',
        'index.addFailed': '添加支出失败',

        'table.title': 'ExpenseOwl 表格',
        'table.showAll': '显示全部记录',
        'table.updateExpense': '更新支出',
        'table.noTransactions': '未找到任何记录',
        'table.noMonthExpenses': '本月暂无支出记录',
        'table.loadFailed': '加载支出失败',
        'table.added': '支出添加成功！',
        'table.updated': '支出更新成功！',
        'table.saveFailed': '保存支出失败',
        'table.deleteTitle': '删除支出',
        'table.deleteConfirm': '确定要删除这条支出吗？（此操作无法撤销）',
        'table.deleteFailed': '删除支出失败，请重试。',

        'settings.title': 'ExpenseOwl 设置',
        'settings.version': '版本：',
        'settings.documentation': '文档',
        'settings.categoryTitle': '分类设置',
        'settings.newCategoryPlaceholder': '添加新分类',
        'settings.add': '添加',
        'settings.saveCategories': '保存分类',
        'settings.currencyTitle': '货币设置',
        'settings.startDateTitle': '起始日期设置',
        'settings.themeTitle': '主题设置',
        'settings.themeSystem': '跟随系统',
        'settings.themeLight': '浅色',
        'settings.themeDark': '深色',
        'settings.languageTitle': '语言设置',
        'settings.importExportTitle': '数据导入导出',
        'settings.exportCsv': '导出 CSV',
        'settings.importCsv': '从 CSV 导入',
        'settings.importOldCsv': '从 ExpenseOwl v3.20- 导入',
        'settings.importSummary': '导入结果',
        'settings.totalProcessed': '处理总数：',
        'settings.imported': '成功导入：',
        'settings.skipped': '已跳过：',
        'settings.newCategories': '新增分类：',
        'settings.recurringTitle': '周期交易',
        'settings.addRecurring': '添加周期交易',
        'settings.existingRecurring': '已有周期交易',
        'settings.nextOccurrence': '下次发生',
        'settings.noRecurring': '暂无周期交易。',
        'settings.finished': '已结束',
        'settings.deleteRecurringTitle': '删除周期交易',
        'settings.deleteRecurringConfirm': '您想删除这条交易的全部记录，还是仅删除未来的记录？',
        'settings.deleteFuture': '删除未来',
        'settings.deleteAll': '全部删除',
        'settings.editRecurringTitle': '编辑周期交易',
        'settings.occurrencesIndefinite': '发生次数（0 表示无限）',
        'settings.updateFuture': '更新未来',
        'settings.updateAll': '全部更新',

        'settings.categoryExists': '该分类已存在',
        'settings.categoryEmpty': '分类名不能为空。',
        'settings.categoryRequired': '至少需要保留一个分类',
        'settings.categoriesSaved': '分类保存成功',
        'settings.categoriesSaveFailed': '保存分类失败：{message}',
        'settings.categoriesSaveError': '保存分类时出错',
        'settings.currencySaved': '货币保存成功',
        'settings.currencySaveFailed': '货币保存失败',
        'settings.currencySaveError': '保存货币时出错',
        'settings.startDateSaved': '起始日期保存成功',
        'settings.startDateSaveFailed': '起始日期保存失败',
        'settings.startDateSaveError': '保存起始日期时出错',
        'settings.themeUpdated': '主题已更新。',
        'settings.loadFailed': '加载设置失败',
        'settings.recurringLoadFailed': '加载周期交易出错。',
        'settings.recurringDeleted': '周期交易删除成功',
        'settings.recurringDeleteFailed': '删除周期交易失败',
        'settings.recurringUpdated': '周期交易更新成功',
        'settings.recurringUpdateFailed': '更新周期交易失败',
        'settings.recurringAdded': '周期交易添加成功！',
        'settings.recurringAddFailed': '添加周期交易失败',
        'settings.importing': '正在导入……大文件可能需要一些时间。',
        'settings.importCompleted': '导入完成！',
        'settings.importFailed': '导入 CSV 失败',
        'settings.importError': '导入过程中发生未知错误。',
    }
};

let currentLang = 'en';

function getStoredLanguage() {
    const stored = localStorage.getItem('language');
    return SUPPORTED_LANGUAGES.includes(stored) ? stored : 'en';
}

function getLocale() {
    return currentLang === 'zh' ? 'zh-CN' : 'en-US';
}

function t(key, vars) {
    const table = translations[currentLang] || translations.en;
    let text = table[key];
    if (text === undefined) text = translations.en[key];
    if (text === undefined) return key;
    if (vars) {
        Object.keys(vars).forEach(name => {
            text = text.replaceAll(`{${name}}`, vars[name]);
        });
    }
    return text;
}

function applyTranslations(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    scope.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    scope.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
        el.setAttribute('data-tooltip', t(el.dataset.i18nTooltip));
    });
    document.documentElement.lang = getLocale();
}

function setLanguage(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    localStorage.setItem('language', lang);
    currentLang = lang;
    applyTranslations();
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
}

currentLang = getStoredLanguage();
