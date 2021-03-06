// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import { IIconOptions, IIconSubset, registerIcons } from '@uifabric/styling';

export function initializeIcons(baseUrl: string = '', options?: IIconOptions): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-15"`,
      src: `url('${baseUrl}fabric-icons-15-65272067.woff') format('woff')`
    },
    icons: {
      Phishing: '\uF679',
      CreateMailRule: '\uF67A',
      PublishCourse: '\uF699',
      DictionaryRemove: '\uF69A',
      UserRemove: '\uF69B',
      UserEvent: '\uF69C',
      Encryption: '\uF69D',
      PasswordField: '\uF6AA',
      OpenInNewTab: '\uF6AB',
      Hide3: '\uF6AC',
      VerifiedBrandSolid: '\uF6AD',
      MarkAsProtected: '\uF6AE',
      AuthenticatorApp: '\uF6B1',
      WebTemplate: '\uF6B2',
      DefenderTVM: '\uF6B3',
      MedalSolid: '\uF6B9',
      D365TalentLearn: '\uF6BB',
      D365TalentInsight: '\uF6BC',
      D365TalentHRCore: '\uF6BD',
      BacklogList: '\uF6BF',
      ButtonControl: '\uF6C0',
      TableGroup: '\uF6D9',
      MountainClimbing: '\uF6DB',
      TagUnknown: '\uF6DF',
      TagUnknownMirror: '\uF6E0',
      TagUnknown12: '\uF6E1',
      TagUnknown12Mirror: '\uF6E2',
      Link12: '\uF6E3',
      Presentation: '\uF6E4',
      Presentation12: '\uF6E5',
      Lock12: '\uF6E6',
      BuildDefinition: '\uF6E9',
      ReleaseDefinition: '\uF6EA',
      SaveTemplate: '\uF6EC',
      UserGauge: '\uF6ED',
      BlockedSiteSolid12: '\uF70A',
      TagSolid: '\uF70E',
      OfficeChat: '\uF70F',
      OfficeChatSolid: '\uF710',
      MailSchedule: '\uF72E',
      WarningSolid: '\uF736',
      Blocked2Solid: '\uF737',
      SkypeCircleArrow: '\uF747',
      SkypeArrow: '\uF748',
      SyncStatus: '\uF751',
      SyncStatusSolid: '\uF752',
      ProjectDocument: '\uF759',
      ToDoLogoOutline: '\uF75B',
      VisioOnlineLogoFill32: '\uF75F',
      VisioOnlineLogo32: '\uF760',
      VisioOnlineLogoCloud32: '\uF761',
      VisioDiagramSync: '\uF762',
      Event12: '\uF763',
      EventDateMissed12: '\uF764',
      UserOptional: '\uF767',
      ResponsesMenu: '\uF768',
      DoubleDownArrow: '\uF769',
      DistributeDown: '\uF76A',
      BookmarkReport: '\uF76B',
      FilterSettings: '\uF76C',
      GripperDotsVertical: '\uF772',
      MailAttached: '\uF774',
      AddIn: '\uF775',
      LinkedDatabase: '\uF779',
      PromotedDatabase: '\uF77D',
      BarChartVerticalFilter: '\uF77E',
      BarChartVerticalFilterSolid: '\uF77F',
      MicrosoftTranslatorLogo: '\uF782',
      ShowTimeAs: '\uF787',
      FileRequest: '\uF789',
      WorkItemAlert: '\uF78F',
      PowerBILogo16: '\uF790',
      PowerBILogoBackplate16: '\uF791',
      BulletedListText: '\uF792',
      BulletedListBullet: '\uF793',
      BulletedListTextMirrored: '\uF794',
      BulletedListBulletMirrored: '\uF795',
      NumberedListText: '\uF796',
      NumberedListNumber: '\uF797',
      NumberedListTextMirrored: '\uF798',
      NumberedListNumberMirrored: '\uF799',
      RemoveLinkChain: '\uF79A',
      RemoveLinkX: '\uF79B',
      FabricTextHighlight: '\uF79C',
      ClearFormattingA: '\uF79D',
      ClearFormattingEraser: '\uF79E',
      Photo2Fill: '\uF79F',
      IncreaseIndentText: '\uF7A0',
      IncreaseIndentArrow: '\uF7A1',
      DecreaseIndentText: '\uF7A2',
      DecreaseIndentArrow: '\uF7A3',
      IncreaseIndentTextMirrored: '\uF7A4',
      IncreaseIndentArrowMirrored: '\uF7A5',
      DecreaseIndentTextMirrored: '\uF7A6',
      DecreaseIndentArrowMirrored: '\uF7A7',
      CheckListText: '\uF7A8',
      CheckListCheck: '\uF7A9',
      CheckListTextMirrored: '\uF7AA',
      CheckListCheckMirrored: '\uF7AB',
      NumberSymbol: '\uF7AC'
    }
  };

  registerIcons(subset, options);
}
