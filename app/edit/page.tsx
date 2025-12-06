"use client";

import { Large } from '../components/typography'
import { FilterProvider } from "./edit-components/filter-provider";
import { PagesList } from "./edit-components/pages-list";
import TopicDataProvider from './edit-components/topic-data-provider';

export default function Page() {
  return (
    <div className="mt-20 flex flex-col h-screen gap-4">
      <Large text="Pages"/>
      <FilterProvider>
        <TopicDataProvider>
          <PagesList />
        </TopicDataProvider>
      </FilterProvider>
    </div>
  );
}