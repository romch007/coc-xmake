import { commands, CompleteResult, ExtensionContext, listManager, sources, window, workspace } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  window.showMessage(`coc-xmake works!`);

  context.subscriptions.push(
    sources.createSource({
      name: 'coc-xmake completion source', // unique id
      filetypes: ['lua'],
      doComplete: async () => {
        const items = await getCompletionItems();
        return items;
      },
    })
  );
}

async function getCompletionItems(): Promise<CompleteResult> {
  const keywords =
    'add_arflags|add_asflags|add_cflags|add_cincludes|add_csnippets|add_ctypes|add_cxflags|add_cxxflags|add_cxxincludes|add_cxxsnippets|add_cxxtypes|add_dcflags|add_cuflags|add_culdflags|add_defines|add_deps|add_files|add_frameworkdirs|add_frameworks|add_gcflags|add_includedirs|add_languages|add_ldflags|add_linkdirs|add_links|add_mflags|add_moduledirs|add_mxflags|add_mxxflags|add_options|add_packagedirs|add_packages|add_plugindirs|add_rcflags|add_rpathdirs|add_scflags|add_shflags|add_undefines|add_vectorexts|after_load|after_build|after_check|after_clean|after_install|after_package|after_run|after_uninstall|after_link|before_load|before_build|before_check|before_clean|before_install|before_package|before_run|before_uninstall|before_link|catch|cprint|cprintf|finally|format|import|includes|inherit|ipairs|is_arch|is_host|is_kind|is_mode|is_os|is_plat|on_load|on_build|on_check|on_clean|on_install|on_config|on_package|on_run|on_uninstall|on_link|option|option_end|pairs|print|printf|raise|set_basename|set_extension|set_filename|set_prefixname|set_suffixname|set_category|set_default|set_description|add_headerfiles|add_installfiles|set_installdir|set_configdir|set_configvar|add_configfiles|set_runtimes|set_policy|set_kind|set_languages|set_fpmodels|set_menu|set_objectdir|set_optimize|set_options|set_pcheader|set_pcxxheader|set_project|set_showmenu|set_strip|set_symbols|set_targetdir|set_dependir|set_version|set_warnings|set_xmakever|target|target_end|task|task_end|rule|rule_end|add_values|set_values|set_group|add_filegroups|add_rules|on_build_file|on_build_files|after_build_file|after_build_files|before_build_file|before_build_files|on_buildcmd_file|on_buildcmd_files|on_linkcmd|add_requires|add_requireconfs|add_repositories|set_defaultplat|set_defaultarch|set_defaultmode|set_allowedplats|set_allowedarchs|set_allowedmodes|try|vformat|has_config|is_config|get_config|add_cugencodes|set_rundir|add_runenvs|package|on_download|on_test|set_urls|add_urls|add_versions|add_toolchains|find_package'.split(
      '|'
    );
  const luaKeywords = [
    'if',
    'function',
    'for',
    'local',
    'else',
    'elseif',
    'then',
    'end',
    'nil',
    'true',
    'false',
    'do',
    'while',
  ];
  return { items: keywords.concat(luaKeywords).map((word) => ({ word, menu: '[coc-xmake]' })) };
}
