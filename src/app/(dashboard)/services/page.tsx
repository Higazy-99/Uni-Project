"use client";

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import Card from '@/components/common/Card';
import StatusBadge from '@/components/common/StatusBadge';
import { toast } from 'sonner';

interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    colorBg: string; // e.g., bg-blue-50
    colorText: string; // e.g., text-blue-600
}

const services: Service[] = [
    {
        id: '1',
        title: 'البطاقة الجامعية',
        description: 'طلب إصدار بطاقة جامعية جديدة أو بدل فاقد/تالف.',
        icon: 'badge',
        color: 'blue',
        colorBg: 'bg-blue-50 dark:bg-blue-900/20',
        colorText: 'text-blue-600 dark:text-blue-400'
    },
    {
        id: '2',
        title: 'إفادة قيد',
        description: 'استخراج إفادة قيد إلكترونية موثقة تثبت حالة الطالب.',
        icon: 'description',
        color: 'green',
        colorBg: 'bg-green-50 dark:bg-green-900/20',
        colorText: 'text-green-600 dark:text-green-400'
    },
    {
        id: '3',
        title: 'بطاقة النقل',
        description: 'الاشتراك في خدمة النقل الجامعي وإصدار بطاقة الحافلات.',
        icon: 'directions_bus',
        color: 'amber',
        colorBg: 'bg-amber-50 dark:bg-amber-900/20',
        colorText: 'text-amber-600 dark:text-amber-400'
    },
    {
        id: '4',
        title: 'السجل الأكاديمي',
        description: 'طلب نسخة رسمية من السجل الأكاديمي (Transcript).',
        icon: 'school',
        color: 'purple',
        colorBg: 'bg-purple-50 dark:bg-purple-900/20',
        colorText: 'text-purple-600 dark:text-purple-400'
    },
    {
        id: '5',
        title: 'إعادة تصحيح',
        description: 'تقديم طلب مراجعة درجة اختبار نهائي أو إعادة تصحيح.',
        icon: 'history_edu',
        color: 'rose',
        colorBg: 'bg-rose-50 dark:bg-rose-900/20',
        colorText: 'text-rose-600 dark:text-rose-400'
    },
    {
        id: '6',
        title: 'خطاب تدريب',
        description: 'اصدار خطاب توجيه للتدريب الميداني أو التعاوني.',
        icon: 'work',
        color: 'indigo',
        colorBg: 'bg-indigo-50 dark:bg-indigo-900/20',
        colorText: 'text-indigo-600 dark:text-indigo-400'
    }
];

export default function ServicesPage() {

    const handleRequestService = (service: Service) => {
        toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
            loading: `جارٍ تقديم طلب ${service.title}...`,
            success: `تم تقديم طلب ${service.title} بنجاح!`,
            error: 'حدث خطأ أثناء تقديم الطلب',
        });
    };

    return (
        <>
            <PageHeader
                title="الخدمات الإلكترونية"
                description="منصة موحدة لكافة الخدمات الطلابية التي تحتاجها خلال مسيرتك الجامعية."
                breadcrumbs={[{ label: 'الرئيسية' }, { label: 'الخدمات الطلابية' }]}
                actions={
                    <div className="w-full md:w-auto relative">
                        <input
                            className="w-full md:w-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 pl-10 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
                            placeholder="ابحث عن خدمة..."
                            type="text"
                        />
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            search
                        </span>
                    </div>
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => handleRequestService(service)}
                        className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-card border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-[4rem] -mr-4 -mt-4 transition-transform group-hover:scale-110 opacity-50 ${service.colorBg}`}></div>
                        <div className="relative z-10">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm ${service.colorBg} ${service.colorText}`}>
                                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                                {service.description}
                            </p>
                            <div className="flex items-center text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <span>تقديم طلب</span>
                                <span className="material-symbols-outlined text-sm rtl:rotate-180 mr-1">
                                    arrow_forward
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Card noPadding className="overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                            <span className="material-symbols-outlined">pending_actions</span>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                            طلباتي السابقة
                        </h3>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
                            <tr>
                                <th className="px-6 py-4" scope="col">
                                    رقم الطلب
                                </th>
                                <th className="px-6 py-4" scope="col">
                                    الخدمة
                                </th>
                                <th className="px-6 py-4" scope="col">
                                    تاريخ الطلب
                                </th>
                                <th className="px-6 py-4 text-center" scope="col">
                                    الحالة
                                </th>
                                <th className="px-6 py-4 text-center" scope="col">
                                    إجراء
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs">SR-20250012</td>
                                <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                                    إفادة قيد
                                </td>
                                <td className="px-6 py-4">2025/01/10</td>
                                <td className="px-6 py-4 text-center">
                                    <StatusBadge label="مكتمل" variant="success" showDot />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-primary hover:text-primary-dark font-medium text-xs">
                                        عرض
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs">SR-20240954</td>
                                <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                                    بطاقة جامعية
                                </td>
                                <td className="px-6 py-4">2024/09/15</td>
                                <td className="px-6 py-4 text-center">
                                    <StatusBadge label="مكتمل" variant="success" showDot />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-primary hover:text-primary-dark font-medium text-xs">
                                        عرض
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </>
    );
}
